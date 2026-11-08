# Integración para instituciones emisoras

Esta guía describe cómo una institución —un empleador, un banco, una universidad, una clínica— emite credenciales verificables que sus personas llevan en el teléfono y que cualquier tercero autorizado puede comprobar en segundos.

**Lo que no cambia en tu sistema:** nada. La integración ocurre a través de un adaptador que consulta tu API existente; no se reemplaza tu sistema de gestión ni se migran datos.

**Dos modos de emisión.** En el flujo *pull*, la persona pide la credencial desde la wallet cuando la necesita. En el flujo *push*, tu sistema la emite proactivamente —al cerrar una nómina, por ejemplo— y queda esperando en el teléfono de cada trabajador.

**Base URL:** `https://<tu-adapter>/api` · **API v1 · preproducción**

> Esta referencia describe la interfaz v1 en preproducción. La estructura de los endpoints es estable, pero <strong>puede ajustarse con el primer integrador en producción</strong>. Si está evaluando una integración, escríbanos antes de construir contra esta versión.

---


## 1. Autenticación

### Endpoints Pull (llamados por la wallet)

Requieren JWT en el header `Authorization: Bearer <token>`.

El token lo emite el **Veris Control Center**, no el adapter. El adapter solo lo verifica.

### Endpoints Push / Webhook (llamados por el sistema interno del emisor)

No usan JWT. Usan **firma HMAC-SHA256** en el header `X-Webhook-Signature`.  
Ver sección [5. Seguridad de webhooks](#5-seguridad-de-webhooks-firma-hmac-sha256).

---

## 2. Flujo Pull — emisión a demanda

El usuario solicita la credencial activamente desde la Veris Wallet.

```
Wallet ──► POST /api/issue ──► Adapter ──► API interna del emisor ──► SD-JWT ──► Wallet
```

### `POST /api/issue`

**Autenticación:** `Authorization: Bearer <JWT>`  
**Guard:** el DID del token debe coincidir con `userDid` del body

#### Request Body

```json
{
  "userId":             "12345678-9",
  "userDid":            "did:veris:user-<identificador>",
  "institutionCode":    "bci",
  "industryName":       "financial",
  "credentialTypeCode": "income-certificate",
  "additionalParams": {
    "month": "06",
    "year":  "2026"
  }
}
```

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `userId` | string | ✅ | RUT u otro identificador único del usuario |
| `userDid` | string | ✅ | Identificador descentralizado del usuario. Lo entrega la wallet; el emisor no lo construye. |
| `institutionCode` | string | ✅ | Código de tu institución, asignado por Veris en la puesta en marcha |
| `industryName` | string | ✅ | Industria — ej. `financial`, `educational`, `healthcare` |
| `credentialTypeCode` | string | ✅ | Tipo de credencial — ej. `income-certificate`, `paystub-certificate` |
| `additionalParams` | object | ❌ | Parámetros específicos del tipo (mes/año de liquidación, número de cuenta, etc.) |

#### Proceso interno del adapter (4 pasos)

1. **Validación del JWT** — DID del token coincide con `userDid` del request
2. **Verificación blockchain** — la institución está registrada y activa en el registro de confianza de Veris
3. **Llamada al API interno** — el adapter consulta el endpoint configurado en `certificateEndpoints`
4. **Generación SD-JWT** — mapeo de campos + firma con la clave del emisor (ver [custodia de la clave](#custodia-de-la-clave-de-firma))

#### Custodia de la clave de firma

La credencial se firma con la clave del emisor. **Dónde vive esa clave se define en la puesta en marcha**, y hay dos modalidades:

| Modalidad | Dónde está la clave | Cuándo aplica |
|---|---|---|
| **Gestionada por Veris** | En el despliegue del adapter | Preproducción y pilotos: permite emitir y verificar de punta a punta sin trabajo de infraestructura del emisor |
| **Retenida por la institución** | KMS o HSM de la institución; el adapter firma invocándolo, sin ver la clave privada | Producción. Incluye el caso de una institución que ya cuenta con certificado de un prestador acreditado |

La segunda modalidad es la que corresponde a producción: **la institución mantiene el control de su clave y el adapter nunca la posee.** El formato del JWT y el algoritmo son idénticos en ambas — lo único que cambia es la custodia.

> **Nota sobre firma electrónica.** La firma de la credencial es criptográficamente verificable: una credencial alterada no pasa la verificación, y la autoría se comprueba contra la cadena de confianza del emisor. Esto es independiente de la categoría de la Ley 19.799: si la institución requiere que la credencial se firme con su certificado de firma electrónica avanzada, la modalidad de clave retenida lo permite. Conversar en la puesta en marcha.

#### Response `200 OK`

Ver [sección 6](#6-estructura-de-la-credencial-emitida) para la estructura completa.

#### Errores

| HTTP | Descripción |
|---|---|
| `400` | Faltan campos requeridos o `institutionCode` no configurado |
| `401` | JWT inválido o DID del token no coincide con `userDid` |
| `404` | Tipo de credencial no encontrado en Control Center |
| `409` | Límite de emisión del período alcanzado (ver sección 4.3) |
| `500` | Error al consultar el API interno del emisor |

---

## 3. Flujo Push — emisión proactiva

> **El push requiere autorización previa del titular, por institución.** Hoy el emisor envía por
> `userId` y el adapter resuelve si esa persona tiene la wallet instalada. Eso **no es suficiente como
> base de licitud**: implica tratar datos de personas que no solicitaron la credencial.
>
> La autorización por institución —el titular habilita a un emisor desde su wallet, firmado, y el
> emisor queda notificado y con el registro— **está especificada y pendiente de implementación**.
> Hasta entonces, el push está disponible solo para instituciones que ya recabaron el consentimiento
> de los titulares incluidos por sus propios medios.
>
> **Para pilotos, use el flujo _pull_** de la sección 2: el titular pide la credencial cuando la
> necesita, el acto de pedirla es el consentimiento, y su API autoriza en ese momento. No requiere
> ninguna autorización previa ni lista de habilitados.

La institución envía la credencial sin que el usuario la solicite.  
Típico en: nóminas mensuales, altas de empleados, resultados de exámenes.

```
Sistema emisor ──► POST /api/webhooks/credential/:code ──► Adapter ──► Notificación push ──► Wallet
```

> **Requisito previo:** el usuario debe haber registrado su token de notificaciones  
> (esto lo hace la wallet automáticamente al iniciar — ver sección 3.3).

---

### 3.1 Webhook individual

Para eventos unitarios en tiempo real (un contrato firmado, un resultado disponible, etc.)

### `POST /api/webhooks/credential/:institutionCode`

**Autenticación:** `X-Webhook-Signature: sha256=<HMAC-SHA256>`  

#### Headers requeridos

| Header | Descripción |
|---|---|
| `X-Webhook-Signature` | `sha256=<HMAC-SHA256 del body JSON serializado>` |
| `X-Institution-Code` | Código de la institución (debe coincidir con el `:institutionCode` de la URL) |

#### Request Body

```json
{
  "userId":             "12345678-9",
  "credentialTypeCode": "paystub-certificate",
  "requestId":          "nomina-2026-06-empleado-001",
  "issuedAt":           "2026-07-03T10:00:00Z",
  "data": {
    "nombre_completo": "Carlos Martínez",
    "renta_liquida":   "1850000",
    "empleador":       "Tecnología SpA",
    "fecha_inicio":    "2023-03-01"
  },
  "metadata": {
    "periodo": "junio-2026",
    "origen":  "sistema-rrhh"
  }
}
```

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `userId` | string | ✅ | RUT u otro identificador del destinatario |
| `credentialTypeCode` | string | ✅ | Tipo de credencial a emitir |
| `data` | object | ✅ | Datos en el formato interno del emisor — el adapter los mapea según `fieldMapping` |
| `requestId` | string | ❌ | ID de trazabilidad del sistema emisor |
| `issuedAt` | string | ❌ | Timestamp ISO 8601 de emisión en el sistema origen |
| `metadata` | object | ❌ | Campos adicionales para auditoría (se adjuntan a la credencial) |

#### Response `200 OK`

```json
{
  "success":      true,
  "credentialId": "vc_xyz789",
  "message":      "Credential received and processed successfully"
}
```

#### Comportamiento cuando el usuario no tiene push token

El adapter genera y almacena la credencial igualmente.  
La credencial queda disponible 10 minutos para descarga manual.  
Se registra un `WARN` en los logs: `"Usuario X no tiene push token registrado"`.

---

### 3.2 Webhook batch (nóminas masivas)

Para procesar cientos o miles de credenciales en un único request HTTP.

> **Base de licitud — leer antes de integrar.** El flujo por lote presupone que **la institución ya recabó el consentimiento de los titulares incluidos**, o que cuenta con otra base de licitud para el tratamiento. Veris actúa como **encargado del tratamiento**: trata los datos por mandato de la institución, para el fin que ella define, y el alcance se fija en el contrato de encargo.
>
> Para pilotos recomendamos la secuencia inversa: **invitar primero y emitir después**, con el flujo *pull* — el titular pide su credencial desde la wallet y la institución aporta solo los datos de quien la pidió. El consentimiento queda firmado por la wallet del titular, y no se tratan datos de personas que no participaron.

**Optimizaciones vs N llamadas individuales:**

| Operación | Sin batch | Con batch (500 empleados) |
|---|---|---|
| Verificación HMAC | 500 veces | **1 vez** |
| Verificación del emisor | 500 veces | **1 vez** |
| Envío de notificaciones | 500 envíos | **agrupados en lotes** |

### `POST /api/webhooks/credentials/batch`

**Autenticación:** `X-Webhook-Signature: sha256=<HMAC-SHA256>`

#### Headers requeridos

| Header | Descripción |
|---|---|
| `X-Webhook-Signature` | HMAC-SHA256 del body JSON serializado completo |
| `X-Institution-Code` | Código de la institución emisora |

#### Request Body

```json
{
  "batchId": "nomina-2026-07",
  "credentials": [
    {
      "userId":             "12345678-9",
      "credentialTypeCode": "paystub-certificate",
      "requestId":          "nomina-2026-07-001",
      "data": {
        "nombre_completo": "Carlos Martínez",
        "renta_liquida":   "1850000",
        "empleador":       "Tecnología SpA"
      }
    },
    {
      "userId":             "98765432-1",
      "credentialTypeCode": "paystub-certificate",
      "requestId":          "nomina-2026-07-002",
      "data": {
        "nombre_completo": "Ana González",
        "renta_liquida":   "2100000",
        "empleador":       "Tecnología SpA"
      }
    }
  ]
}
```

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `batchId` | string | ✅ | ID único del lote — para trazabilidad en logs. Ej: `"nomina-2026-07"`, `"lote-20260703-001"` |
| `credentials` | array | ✅ | Array de credenciales individuales (mismo schema que el webhook individual, sin firma propia) |

> No hay límite de tamaño en el servidor. Los pushes se envían en chunks de 100 automáticamente.

#### Response `200 OK`

```json
{
  "success":   true,
  "batchId":   "nomina-2026-07",
  "processed": 498,
  "failed":    2,
  "errors": [
    {
      "userId": "11111111-1",
      "error":  "fieldMapping missing: renta_liquida"
    },
    {
      "userId": "22222222-2",
      "error":  "credentialTypeCode 'invalid-type' not in fieldMapping"
    }
  ]
}
```

> El campo `errors` solo aparece si `failed > 0`.  
> Los errores son por item — el resto del lote se procesa correctamente.

---

### 3.3 Registro de dispositivo

La wallet registra su token de notificaciones al iniciar. Esto lo hace automáticamente — **no requiere integración del emisor.**

> **Alcance:** este registro es **global de la wallet**, no por institución. Significa «este
> dispositivo puede recibir notificaciones», no «este titular autorizó a esta institución a emitirle».
> La autorización por institución es independiente y está descrita arriba.

### `POST /api/device/token`

**Autenticación:** `Authorization: Bearer <JWT>` (wallet)

```json
{
  "pushToken": "<token del dispositivo>"
}
```

**Response:**
```json
{ "success": true, "message": "Push token registrado correctamente" }
```

**TTL del token:** 30 días. Si el usuario no abre la app en 30 días, el token expira y debe re-registrarse.

---

### 3.4 Descarga de credencial pendiente

La wallet descarga la credencial al recibir la notificación push. Esto lo hace automáticamente — **no requiere integración del emisor.**

### `GET /api/credentials/pending/:uuid`

**Autenticación:** ninguna (el UUID de 122 bits actúa como bearer token de un solo uso)

**TTL:** 10 minutos desde la emisión.  
**Consumo:** el primer acceso elimina la credencial del store — no puede descargarse dos veces.

```json
// Response: estructura completa de la Credential (ver sección 7)
```

**Errores:**
- `404` — credencial no encontrada (expirada o ya descargada)

---

## 4. Gestión del ciclo de vida

### 4.1 Estado de credencial

Consultado por los verificadores al validar una presentación.

### `GET /api/issue/:id/status`

**Autenticación:** `Authorization: Bearer <JWT>`

**Response:**

```json
{
  "credentialId": "vc_abc123",
  "status":       "active",
  "singleUse":    false
}
```

**Estados posibles:**

| Estado | Descripción |
|---|---|
| `active` | Emitida, vigente, lista para presentarse |
| `expired` | La fecha de expiración ya pasó |
| `revoked` | Revocada explícitamente por la institución |
| `used` | Uso único ya consumido (`singleUse=true`) |
| `suspended` | Suspendida temporalmente, puede reactivarse |
| `invalid` | La institución no pudo verificar los datos al momento de emisión |

---

### 4.2 Consumir credencial (uso único)

Para credenciales con `singleUse=true` (recetas médicas, pases de evento, vales de comedor, etc.).  
El verificador llama este endpoint tras una verificación exitosa para invalidar la credencial.

### `PATCH /api/issue/:id/consume`

**Autenticación:** `Authorization: Bearer <JWT>`  
**Header opcional:** `X-Verifier-DID: did:veris:verifier-xxx` (para auditoría)

**Response `200 OK`:**
```json
{
  "credentialId": "vc_abc123",
  "status":       "used",
  "singleUse":    true,
  "consumedAt":   "2026-07-03T15:22:00Z",
  "consumedBy":   "did:veris:verifier-restaurant-01"
}
```

**Errores:**
- `404` — credencial no registrada en el adapter
- `409` — credencial ya fue consumida (o está en estado diferente de `active`)

---

### 4.3 Límites de emisión por período

Configurable via variable de entorno `ISSUANCE_LIMITS`.  
Evita que un usuario solicite el mismo tipo de credencial más veces de las permitidas.

```bash
# Ejemplos en .env:
ISSUANCE_LIMITS=cafeteria-access:1:daily          # 1 acceso al comedor por día
ISSUANCE_LIMITS=paystub-certificate:1:monthly     # 1 liquidación por mes
ISSUANCE_LIMITS=cafeteria-access:3:weekly,paystub-certificate:1:monthly  # múltiples reglas
```

**Formato:** `<credentialTypeCode>:<maxCount>:<period>`  
**Períodos:** `daily` (medianoche UTC) | `weekly` (lunes UTC) | `monthly` (día 1 del mes)

#### `GET /api/issue/daily-limit/status`

**Query params:** `userId`, `credentialTypeCode`, `institutionCode`

```
GET /api/issue/daily-limit/status
  ?userId=12345678-9
  &credentialTypeCode=cafeteria-access
  &institutionCode=mi-empresa
```

**Response:**
```json
{
  "userId":              "12345678-9",
  "credentialTypeCode":  "cafeteria-access",
  "institutionCode":     "mi-empresa",
  "period":              "daily",
  "currentPeriodLabel":  "2026-07-03",
  "issuedInPeriod":      1,
  "maxCount":            1,
  "limitReached":        true,
  "remaining":           0,
  "resetsAt":            "2026-07-04T00:00:00.000Z"
}
```

#### `DELETE /api/issue/daily-limit/reset`

Reinicia el contador manualmente (uso administrativo — RRHH, incidencias).

**Query params:** `userId`, `credentialTypeCode`, `institutionCode`

```json
// Response:
{
  "success": true,
  "message": "Contador reiniciado para 12345678-9 — puede emitir cafeteria-access nuevamente en este daily"
}
```

---

## 5. Seguridad de webhooks — firma HMAC-SHA256

Todos los webhooks entrantes deben incluir el header `X-Webhook-Signature`.

### Cómo calcular la firma

```javascript
// Node.js
const crypto = require('crypto');

const payload = JSON.stringify(requestBody);  // el body EXACTAMENTE como se envía
const secret  = process.env.VERIS_WEBHOOK_SECRET;   // el que entregó Veris

const signature = 'sha256=' + crypto
  .createHmac('sha256', secret)
  .update(payload)
  .digest('hex');

// Incluir en el request:
// X-Webhook-Signature: sha256=abc123def456...
```

```python
# Python
import hmac, hashlib, json

payload   = json.dumps(request_body, separators=(',', ':'))
secret    = b'tu-webhook-secret'
signature = 'sha256=' + hmac.new(secret, payload.encode(), hashlib.sha256).hexdigest()
```

> ⚠️ **Importante:** el adapter usa `crypto.timingSafeEqual` para la comparación — esto previene timing attacks.

### El secreto compartido

Veris genera el secreto y lo entrega por un canal seguro durante la puesta en marcha. Es obligatorio y tiene un mínimo de 32 caracteres.

Guárdalo como variable de entorno en tu sistema —nunca en el código ni en el repositorio— y úsalo para firmar cada envío. Si necesitas rotarlo, se coordina con soporte y se acepta el secreto anterior durante la ventana de transición para que no haya corte.

### Validación del challenge

Para verificar que el endpoint del adapter está operativo:

```
POST /api/webhooks/verify/:institutionCode
Body: { "challenge": "token-aleatorio-123" }

Response: { "challenge": "token-aleatorio-123", "verified": true }
```

---

## 6. Estructura de la credencial emitida

Todos los endpoints de emisión devuelven un objeto `Credential`:

```json
{
  "id":                    "vc_abc123def456",
  "credentialTypeCode":    "paystub-certificate",
  "credentialTypeName":    "Liquidación de Sueldo",
  "status":                "active",
  "disclosureRequired":    true,
  "requiresOnlineValidation": false,
  "singleUse":             false,
  "issuerDid":             "did:veris:institution-mi-empresa",
  "institutionCode":       "mi-empresa",
  "industryName":          "financial",
  "issuanceDate":          "2026-07-03T10:00:00Z",
  "expirationDate":        "2027-07-03T10:00:00Z",
  "userDid":               "did:veris:user-<identificador>",
  "userName":              "Carlos Martínez",
  "verified":              true,
  "disclosableFields":     ["rent", "employer", "userName", "userId"],
  "signature": {
    "jwt": "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9...",
    "disclosures": [
      { "field": "rent",     "value": "1850000",       "salt": "a3K9mP2x..." },
      { "field": "employer", "value": "Tecnología SpA", "salt": "b7W4nT9y..." },
      { "field": "userName", "value": "Carlos M.",      "salt": "c5V8oS3z..." },
      { "field": "userId",   "value": "12345678-9",     "salt": "d2U7pR6w..." }
    ]
  },
  "metadata": {
    "webhook": {
      "receivedAt": "2026-07-03T10:00:00Z",
      "requestId":  "nomina-2026-07-001",
      "periodo":    "junio-2026"
    }
  }
}
```

### Campos que conviene entender

**`verified`** — lo informa tu propia institución en la respuesta a la consulta del adaptador: confirma que el dato proviene de tus registros. Si tu sistema responde `verified: false`, el adaptador **rechaza la emisión** en lugar de firmar un dato sin respaldo.

**`proof`** — opcional. Es la prueba de origen que aporta tu institución si firma su propia respuesta. No es la firma de Veris: esa va siempre en `signature.jwt`, y es la que el verificador comprueba.

**`disclosableFields`** — los campos que el titular podrá revelar por separado al presentar la credencial. Lo que no está aquí no se puede presentar.

### Formato SD-JWT

El campo `signature.jwt` es un JWT firmado con EdDSA que contiene los **hashes** de cada disclosure, no los valores en texto claro. Los valores reales están en `signature.disclosures` con su salt individual.

Cuando el usuario presenta la credencial a un verificador, puede elegir revelar solo los disclosures que el verificador necesita — los demás quedan ocultos.

---

## 7. Códigos de error

Todos los errores siguen el formato estándar NestJS:

```json
{
  "statusCode": 400,
  "message":    "Description of the error",
  "error":      "Bad Request"
}
```

| HTTP | Causa habitual |
|---|---|
| `400 Bad Request` | Cuerpo inválido, campos faltantes, `institutionCode` no configurado, webhook inválido |
| `401 Unauthorized` | JWT inválido o expirado, firma HMAC incorrecta, DID del token no coincide |
| `404 Not Found` | Tipo de credencial no existe, credencial pendiente expirada o ya descargada |
| `409 Conflict` | Límite de emisión del período alcanzado, credencial singleUse ya consumida |
| `429 Too Many Requests` | Rate limiting del servidor (30 req/60s por IP) |
| `500 Internal Server Error` | Error al contactar el API interno del emisor, error de firma blockchain |

---

## Resumen de endpoints

| Método | Ruta | Auth | Descripción |
|---|---|---|---|
| `POST` | `/api/issue` | JWT | Pull — emitir credencial a demanda |
| `GET` | `/api/issue/:id/status` | JWT | Estado del ciclo de vida de una credencial |
| `PATCH` | `/api/issue/:id/consume` | JWT | Marcar credencial singleUse como consumida |
| `GET` | `/api/issue/daily-limit/status` | JWT | Consultar límite de emisión del período |
| `DELETE` | `/api/issue/daily-limit/reset` | JWT | Reiniciar contador (admin) |
| `POST` | `/api/webhooks/credential/:code` | HMAC | Push individual — un evento puntual |
| `POST` | `/api/webhooks/credentials/batch` | HMAC | Push batch — nómina o proceso masivo |
| `POST` | `/api/webhooks/status/:code` | HMAC | Actualizar estado de una credencial existente |
| `POST` | `/api/webhooks/verify/:code` | — | Verificar que el endpoint está activo (challenge) |
| `POST` | `/api/device/token` | JWT | Registrar token de notificaciones (wallet) |
| `GET` | `/api/credentials/pending/:uuid` | UUID | Descargar credencial pendiente (wallet) |

---

*Documento interno — Veris, Julio 2026*
