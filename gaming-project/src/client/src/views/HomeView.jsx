// Vista inicial que muestra juegos destacados cargados desde la API.
import { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import { loadFeaturedGames } from '../controllers/homeController';

export default function HomeView() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    loadFeaturedGames()
      .then(setGames)
      .catch(() => setGames([]));
  }, []);

  return (
    <section>
      <h2>Featured games</h2>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}
