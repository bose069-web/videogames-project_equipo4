// Vista de listado y búsqueda de videojuegos.
import { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import { fetchGames, searchGames } from '../services/apiClient';
import { toGameViewModel } from '../models/gameModel';

export default function GamesView() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchGames()
      .then((response) => setGames(response.items.map(toGameViewModel)))
      .catch(() => setGames([]));
  }, []);

  const handleSearch = async () => {
    if (!search.trim()) {
      const fallback = await fetchGames();
      setGames(fallback.items.map(toGameViewModel));
      return;
    }

    const response = await searchGames(search);
    setGames(response.items.map(toGameViewModel));
  };

  return (
    <section>
      <h2>Games catalog</h2>
      <SearchBar value={search} onChange={setSearch} onSubmit={handleSearch} />
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}
