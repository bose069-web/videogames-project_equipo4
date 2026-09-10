// Configura la aplicación Express con middlewares, rutas y manejo de errores.
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const gamesRoutes = require('./routes/gamesRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/games', gamesRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((error, _req, res, _next) => {
  res.status(500).json({ message: 'Internal server error', details: error.message });
});

module.exports = app;
