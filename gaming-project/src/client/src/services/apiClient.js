// Cliente HTTP mínimo para consumir la API del backend de videojuegos.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000/api';

async function request(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export function fetchGames(limit = 20) {
  return request(`/games?limit=${limit}`);
}

export function fetchGameById(id) {
  return request(`/games/${id}`);
}

export function searchGames(query) {
  return request(`/games/search?q=${encodeURIComponent(query)}`);
}

export function fetchTopRated(limit = 10) {
  return request(`/games/top-rated?limit=${limit}`);
}
