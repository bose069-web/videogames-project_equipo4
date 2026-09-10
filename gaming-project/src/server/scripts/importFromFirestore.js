// Script base para copiar juegos entre colecciones dentro de Firestore por lotes.
const dotenv = require('dotenv');
dotenv.config({ path: '../../../.env' });

const { db } = require('../db/firestore');
const { logInfo, logError } = require('../utils/logger');

const sourceCollection = process.env.FIREBASE_GAMES_COLLECTION || 'games';
const targetCollection = `${sourceCollection}_import_snapshot`;

async function runImport() {
  try {
    const snapshot = await db.collection(sourceCollection).limit(100).get();

    if (snapshot.empty) {
      logInfo('No games found to import');
      return;
    }

    const batch = db.batch();

    snapshot.docs.forEach((doc) => {
      batch.set(db.collection(targetCollection).doc(doc.id), doc.data(), { merge: true });
    });

    await batch.commit();
    logInfo('Import completed', { imported: snapshot.docs.length, targetCollection });
  } catch (error) {
    logError('Import failed', { error: error.message });
    process.exitCode = 1;
  }
}

runImport();
