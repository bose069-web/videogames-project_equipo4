// Registra rutas REST relacionadas con videojuegos.
const express = require('express');
const {
  getGames,
  getGameById,
  searchGames,
  getTopRatedGames
} = require('../controllers/gamesController');

const router = express.Router();

router.get('/', getGames);
router.get('/search', searchGames);
router.get('/top-rated', getTopRatedGames);
router.get('/:id', getGameById);

module.exports = router;
