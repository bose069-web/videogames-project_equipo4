# Gaming Project

> Plataforma full-stack de videojuegos preparada para escalar sobre Firebase Firestore con más de 4000 juegos en la colección `games`.

## Descripción

Este repositorio implementa una primera versión profesional de una plataforma de videojuegos con arquitectura por capas:

- **Frontend React** para navegación, búsqueda, listado y detalle.
- **Backend Express** para exponer API REST y encapsular acceso a Firestore.
- **Módulos compartidos** para constantes y contratos base.

## Arquitectura

La solución se organiza en:

- `src/client`: aplicación React (UI y consumo de API).
- `src/server`: API Express y acceso a Firestore.
- `src/shared`: tipos y constantes compartidas.
- `docs`: documentación técnica y operativa.

Consulta detalles en `docs/architecture.md`.

## Tecnologías

- Node.js 20+
- React 18
- React Router DOM 6
- Express 4
- Firebase Admin SDK
- ESLint
- GitHub Actions

## Instalación

1. Clona el repositorio.
2. Copia variables de entorno:
   ```bash
   cp .env.example .env
   ```
3. Instala dependencias:
   ```bash
   npm run install:all
   ```

## Comandos

Desde la raíz `gaming-project`:

- `npm run install:all`: instala dependencias de client y server.
- `npm run lint`: ejecuta lint en backend y frontend.
- `npm run build`: construye el frontend.

Desde `src/server`:

- `npm run dev`: inicia API en modo desarrollo.
- `npm run start`: inicia API en modo producción.
- `npm run import:games`: ejecuta importador de Firestore.

Desde `src/client`:

- `npm run start`: ejecuta frontend en desarrollo.
- `npm run build`: crea build de producción.

## Flujo colaborativo

Modelo recomendado de ramas:

- `main`: producción estable.
- `develop`: integración continua del equipo.
- `feature/frontend`: funcionalidades del frontend.
- `feature/backend`: funcionalidades del backend.
- `feature/firebase`: tareas de integración y datos Firebase.
