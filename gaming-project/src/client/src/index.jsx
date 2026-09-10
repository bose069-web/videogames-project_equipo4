// Punto de montaje de React en el DOM del documento principal.
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/main.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
