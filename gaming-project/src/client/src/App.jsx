// Componente raíz de la aplicación con layout y enrutamiento principal.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import GamesView from './views/GamesView';
import GameDetailView from './views/GameDetailView';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/games" element={<GamesView />} />
          <Route path="/games/:id" element={<GameDetailView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
