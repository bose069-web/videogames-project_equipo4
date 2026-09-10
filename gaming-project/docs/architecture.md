# Architecture Overview

<!-- Documento de arquitectura de alto nivel para el proyecto gaming-project. -->

## Capas

1. **Presentation Layer (client)**
   - Renderiza vistas y componentes React.
   - Gestiona navegación y estado de interacción.
2. **Application Layer (server/controllers)**
   - Orquesta casos de uso de juegos.
   - Aplica reglas de consulta y respuesta HTTP.
3. **Domain/Data Layer (server/models + db)**
   - Normaliza entidades de juego.
   - Encapsula acceso a Firebase Firestore.
4. **Shared Layer (shared)**
   - Publica contratos y constantes reutilizables.

## Flujo principal

Cliente React -> API Express `/api/games/*` -> Firestore colección `games` -> respuesta JSON al cliente.

## Decisiones clave

- Separación client/server para despliegue independiente.
- Firestore como origen de datos único para lectura.
- Estructura por responsabilidades para facilitar colaboración por equipos.
