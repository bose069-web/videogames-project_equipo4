// Modelo de vista para homogenizar datos recibidos desde el backend.
export function toGameViewModel(game) {
  return {
    id: game.id,
    name: game.name,
    rating: game.rating,
    released: game.released,
    backgroundImage: game.background_image,
    platforms: game.platforms || []
  };
}
