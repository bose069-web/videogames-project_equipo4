// Encabezado principal con navegación base del frontend.
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="card">
      <h1>Gaming Project</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/games">Games</Link>
      </nav>
    </header>
  );
}
