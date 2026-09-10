// Controlador de Home para centralizar la carga de juegos destacados.
import { fetchTopRated } from '../services/apiClient';
import { toGameViewModel } from '../models/gameModel';

export async function loadFeaturedGames() {
  const response = await fetchTopRated(6);
  return response.items.map(toGameViewModel);
}
