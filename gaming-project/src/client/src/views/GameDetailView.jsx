// Vista de detalle para un videojuego específico por identificador.
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameById } from '../services/apiClient';
import { toGameViewModel } from '../models/gameModel';

export default function GameDetailView() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGameById(id)
      .then((response) => setGame(toGameViewModel(response)))
      .catch(() => setGame(null));
  }, [id]);

  if (!game) {
    return <p>Game not found.</p>;
  }

  return (
    <section className="card">
      <h2>{game.name}</h2>
      <p>Rating: {game.rating}</p>
      <p>Released: {game.released || 'Unknown'}</p>
      <p>Platforms: {game.platforms.join(', ') || 'Not available'}</p>
      {game.backgroundImage ? <img src={game.backgroundImage} alt={game.name} width="280" /> : null}
    </section>
  );
}
