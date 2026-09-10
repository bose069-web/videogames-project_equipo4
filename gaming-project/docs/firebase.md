# Firebase Integration

<!-- Guía de integración de Firebase Firestore para backend y scripts. -->

## Variables requeridas

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_GAMES_COLLECTION` (por defecto: `games`)

## Inicialización

El backend usa `firebase-admin` en `src/server/db/firestore.js` y crea una sola instancia de `Firestore` reutilizable.

## Buenas prácticas

- Nunca subir archivos de credenciales al repositorio.
- Configurar secretos en CI/CD y entornos cloud.
- Limitar permisos de la service account solo a lectura/escritura necesarias.
