// Contrato base de juego usado como referencia compartida entre capas.
const gameTypeShape = {
  id: 'string',
  name: 'string',
  rating: 'number',
  released: 'string|null',
  background_image: 'string|null',
  platforms: 'string[]'
};

module.exports = { gameTypeShape };
