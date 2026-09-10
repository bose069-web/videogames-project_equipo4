# Import Process

<!-- Proceso base para tareas de importación y sincronización de datos de juegos. -->

## Objetivo

Preparar scripts reutilizables para poblar o sincronizar datos en Firestore sin acoplarlos a la API HTTP.

## Script inicial

`src/server/scripts/importFromFirestore.js` demuestra un proceso controlado que:

1. Lee lote de juegos desde `games`.
2. Reescribe/actualiza una colección destino de respaldo.
3. Registra resultados con logger común.

## Recomendaciones

- Ejecutar importaciones masivas fuera de horas pico.
- Trabajar en lotes para evitar límites de cuota.
- Mantener trazabilidad con logs estructurados.
