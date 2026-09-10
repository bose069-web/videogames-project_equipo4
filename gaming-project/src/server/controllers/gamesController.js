// Define casos de uso HTTP para consultar videojuegos desde Firestore.
const { db } = require('../db/firestore');
const { mapGameDocument } = require('../models/game');

const collectionName = process.env.FIREBASE_GAMES_COLLECTION || 'games';

async function getGames(req, res, next) {
  try {
    const limitValue = Math.min(Number(req.query.limit) || 20, 100);
    const snapshot = await db.collection(collectionName).limit(limitValue).get();
    const games = snapshot.docs.map(mapGameDocument);
    res.json({ total: games.length, items: games });
  } catch (error) {
    next(error);
  }
}

async function getGameById(req, res, next) {
  try {
    const { id } = req.params;
    const byDocumentId = await db.collection(collectionName).doc(id).get();

    if (byDocumentId.exists) {
      return res.json(mapGameDocument(byDocumentId));
    }

    const byFieldId = await db.collection(collectionName).where('id', '==', id).limit(1).get();

    if (byFieldId.empty) {
      return res.status(404).json({ message: 'Game not found' });
    }

    return res.json(mapGameDocument(byFieldId.docs[0]));
  } catch (error) {
    next(error);
  }
}

async function searchGames(req, res, next) {
  try {
    const queryText = String(req.query.q || '').trim().toLowerCase();

    if (!queryText) {
      return res.status(400).json({ message: 'Query parameter q is required' });
    }

    const snapshot = await db.collection(collectionName).limit(200).get();
    const matches = snapshot.docs
      .map(mapGameDocument)
      .filter((game) => game.name.toLowerCase().includes(queryText));

    return res.json({ total: matches.length, items: matches.slice(0, 50) });
  } catch (error) {
    next(error);
  }
}

async function getTopRatedGames(req, res, next) {
  try {
    const limitValue = Math.min(Number(req.query.limit) || 10, 50);
    const snapshot = await db
      .collection(collectionName)
      .orderBy('rating', 'desc')
      .limit(limitValue)
      .get();

    const games = snapshot.docs.map(mapGameDocument);
    return res.json({ total: games.length, items: games });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getGames,
  getGameById,
  searchGames,
  getTopRatedGames
};
