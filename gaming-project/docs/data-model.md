# Data Model

<!-- Definición funcional del modelo de datos de videojuegos. -->

## Colección: `games`

Campos esperados por documento:

- `id` (string | number)
- `name` (string)
- `rating` (number)
- `released` (string, fecha ISO o formato yyyy-mm-dd)
- `background_image` (string URL)
- `platforms` (array de plataformas o estructuras equivalentes)

## Normalización

La API transforma cada documento con el modelo `src/server/models/game.js` para:

- asegurar estructura consistente,
- aplicar valores por defecto,
- evitar exponer datos inesperados.
