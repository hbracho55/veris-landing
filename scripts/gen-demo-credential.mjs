/**
 * Genera la credencial de ejemplo que verifica la sección en vivo del landing.
 *
 *   node scripts/gen-demo-credential.mjs
 *
 * Imprime un bloque listo para pegar en `_components/LiveVerify.tsx`.
 *
 * Reproduce la convención exacta del verificador de Veris
 * (`veris-verifier/src/verifier/verifier.service.ts`):
 *
 *   digest = base64url( sha256( `${campo}:${JSON.stringify(valor)}:${salt}` ) )
 *
 * y los digests van en `_sd` dentro del payload firmado. Si esa convención
 * cambia en el verificador, hay que cambiarla aquí y regenerar.
 *
 * Genera un par de claves nuevo en cada ejecución: la clave privada se usa
 * para firmar y se descarta, así que no hay nada que guardar ni filtrar. La
 * pública se incrusta en el componente para que el navegador pueda verificar
 * sin consultar a ningún servidor.
 *
 * Los valores son de un emisor ficticio. No debe parecer una institución real.
 */

import { createHash, createSign, generateKeyPairSync, randomBytes } from 'node:crypto';

const b64url = (buf) => Buffer.from(buf).toString('base64url');
const digest = (field, value, salt) =>
  createHash('sha256').update(`${field}:${JSON.stringify(value)}:${salt}`).digest('base64url');

// Valores como string a propósito: el campo editable de la interfaz devuelve
// texto, y así el valor original vuelve a validar si el visitante lo reescribe.
const disclosures = [
  { field: 'employer', value: 'Empresa Ejemplo S.A.' },
  { field: 'position', value: 'Analista de operaciones' },
  { field: 'income', value: '1450000' },
  { field: 'contractType', value: 'Indefinido' },
].map((d) => ({ ...d, salt: randomBytes(16).toString('base64url') }));

const ahora = Math.floor(Date.now() / 1000);
const seisMeses = 60 * 60 * 24 * 182;

const header = { alg: 'ES256', typ: 'JWT', kid: 'demo-issuer-1' };
const payload = {
  iss: 'did:web:emisor-demo.veris.cl',
  vct: 'EmploymentCertificate',
  iat: ahora,
  exp: ahora + seisMeses,
  _sd: disclosures.map((d) => digest(d.field, d.value, d.salt)),
};

const { privateKey, publicKey } = generateKeyPairSync('ec', { namedCurve: 'P-256' });

const firmado = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(payload))}`;

// ES256 exige la firma en crudo R||S (64 bytes). Sin `ieee-p1363`, Node emite
// DER y Web Crypto la rechaza sin decir por qué.
const signature = createSign('SHA256')
  .update(firmado)
  .sign({ key: privateKey, dsaEncoding: 'ieee-p1363' });

const jwt = `${firmado}.${b64url(signature)}`;
// generateKeyPairSync sin opciones de codificación ya devuelve KeyObject.
const jwk = publicKey.export({ format: 'jwk' });

// Comprobación propia antes de imprimir: si esto falla, el navegador también.
const { createVerify } = await import('node:crypto');
const ok = createVerify('SHA256')
  .update(firmado)
  .verify({ key: publicKey, dsaEncoding: 'ieee-p1363' }, signature);
if (!ok) throw new Error('La firma generada no valida. No se imprime nada.');

console.log(`// Generado por scripts/gen-demo-credential.mjs — ${new Date().toISOString().slice(0, 10)}
// Emisor ficticio. La clave privada se descartó al generar.

export const DEMO_JWT =
  '${jwt}';

export const DEMO_ISSUER_JWK: JsonWebKey = ${JSON.stringify({ kty: jwk.kty, crv: jwk.crv, x: jwk.x, y: jwk.y }, null, 2)};

export const DEMO_DISCLOSURES = ${JSON.stringify(disclosures, null, 2)};
`);
