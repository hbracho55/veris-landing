# Integración para verificadores

Esta guía describe cómo una institución comprueba una credencial que otra emitió: un banco verificando la renta de un postulante, una inmobiliaria comprobando un contrato vigente, una empresa validando un título profesional.

**API v1 · preproducción.** La estructura de los endpoints es estable, pero puede ajustarse con el primer integrador en producción.

La propiedad que importa: **la verificación no consulta a la institución emisora.** Es una comprobación criptográfica sobre datos que el titular presenta desde su teléfono. No hay llamadas telefónicas, no hay formularios, y no depende de que el emisor tenga sus sistemas disponibles en ese momento.

---

## Los seis pasos de una verificación

Cada presentación pasa por seis comprobaciones. Si alguna falla, la verificación se rechaza y la respuesta indica cuál.

| | Comprobación | Qué garantiza |
|---|---|---|
| 1 | **Anti-replay** | La presentación responde a un desafío único emitido para esta sesión. Una captura de pantalla de una presentación anterior no sirve. |
| 2 | **Firma del emisor** | La credencial la firmó la institución que dice haberla emitido. Se resuelve su identificador descentralizado y se valida la firma contra su clave pública. La custodia de la clave privada se define con cada emisor en la puesta en marcha — ver la [guía de emisores](/docs/emisores). |
| 3 | **Emisor habilitado** | Ese emisor está registrado y habilitado para emitir este tipo de credencial. |
| 4 | **Vigencia** | La credencial no ha expirado ni fue revocada. |
| 5 | **Integridad de los datos revelados** | El hash de cada dato presentado coincide con el compromiso que el emisor firmó. Un valor alterado se detecta aquí. |
| 6 | **Reglas de negocio** | Los datos cumplen la política configurada: una renta mínima, una antigüedad, un tipo de contrato. |

El paso 5 es el que distingue esta verificación de la de un documento firmado convencional. El emisor firma un compromiso criptográfico por cada campo; el titular revela solo los campos que necesita presentar, y el verificador comprueba cada uno contra su compromiso. **Un dato modificado no pasa, aunque la firma del documento siga siendo válida.**

> **Dos modalidades de integración.** En el plan de evaluación la comprobación ocurre **en pantalla**, desde el panel de Veris: el verificador genera el código, el resultado se muestra ahí, y **los datos no entran a sus sistemas** — lo que también significa que no asume el tratamiento de esos datos. La integración por API, que es la que documenta esta guía, corresponde a los planes de operación.

---

## Flujo

```
Verificador                          Titular (wallet)
     │                                      │
     │  1. POST /verifier/challenge         │
     │     ← nonce de sesión                │
     │                                      │
     │  2. muestra el nonce en un QR  ────► │  escanea
     │                                      │
     │                                      │  selecciona qué revelar
     │                                      │
     │  3. POST /verifier/verify-credential │
     │     ◄──── presentación + nonce ───── │
     │                                      │
     │  4. resultado en < 2 s               │
```

---

## Endpoints

### `POST /verifier/challenge`

Genera el nonce de sesión que ata la presentación a este momento. Sin él, una presentación capturada podría reutilizarse.

**Respuesta**

```json
{
  "nonce": "a7f3...",
  "expiresIn": 300
}
```

El endpoint está limitado por tasa.

---

### `POST /verifier/verify-credential`

La verificación completa.

**Autenticación:** `X-API-Key: <tu-clave>`

**Cuerpo**

```json
{
  "jwt": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...",
  "disclosures": [
    { "field": "employer", "value": "Empresa Ejemplo S.A.", "salt": "JFu-q3C6..." },
    { "field": "income",   "value": "1450000",              "salt": "-pPTyIAH..." }
  ],
  "nonce": "a7f3..."
}
```

**Respuesta — aprobada**

```json
{
  "isValid": true,
  "issuer": "did:web:emisor.institucion.cl",
  "claims": {
    "employer": "Empresa Ejemplo S.A.",
    "income": "1450000"
  },
  "verifiedAt": "2026-10-02T14:21:08.442Z"
}
```

**Respuesta — rechazada**

```json
{
  "isValid": false,
  "failedStep": "disclosures",
  "error": "El valor de \"income\" no coincide con el compromiso firmado por el emisor"
}
```

El campo `failedStep` indica en cuál de los seis pasos se detuvo, para que tu sistema pueda registrar el motivo y no solo el rechazo.

---

### `POST /verifier/scan-qr`

Igual que el anterior, pero recibe el contenido crudo del QR y detecta el formato por su cuenta. Útil cuando el escáner entrega el texto sin procesar.

```json
{ "qrData": "<contenido del QR>" }
```

---

## Reglas de negocio sin escribir código

El paso 6 aplica políticas configurables por tipo de credencial: mínimos, máximos, igualdades y emisores admitidos. Permite expresar «renta líquida superior a 800.000 y contrato indefinido» sin tocar el código de tu aplicación.

Para el caso de control de acceso físico existen restricciones adicionales por franja horaria y por dispositivo verificador.

---

## Login sin contraseña

El verificador funciona además como proveedor OpenID Connect, con `Authorization Code Flow` estándar. Si tu aplicación ya soporta OIDC, puede aceptar inicio de sesión con la wallet sin ningún desarrollo específico de Veris:

```
GET /.well-known/openid-configuration
```

---

## Qué se almacena

Nada del titular. El verificador no guarda las credenciales ni los datos revelados; registra el evento de verificación —qué tipo de credencial, qué emisor, el resultado y el momento— para efectos de facturación y auditoría. Los datos personales permanecen en el teléfono de su titular.
