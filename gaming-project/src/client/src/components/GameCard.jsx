// Tarjeta visual para mostrar información resumida de cada videojuego.
import { Link } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <article className="card">
      <h3>{game.name}</h3>
      <p>Rating: {game.rating}</p>
      <p>Released: {game.released || 'Unknown'}</p>
      <Link to={`/games/${game.id}`}>View detail</Link>
    </article>
  );
}
