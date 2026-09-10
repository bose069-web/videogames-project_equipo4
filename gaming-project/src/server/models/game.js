// Normaliza el documento de Firestore a un contrato estable de juego.
function normalizePlatforms(platforms) {
  if (!Array.isArray(platforms)) return [];

  return platforms.map((item) => {
    if (typeof item === 'string') return item;
    if (item?.platform?.name) return item.platform.name;
    if (item?.name) return item.name;
    return 'Unknown';
  });
}

function mapGameDocument(doc) {
  const data = doc.data() || {};

  return {
    id: String(data.id ?? doc.id),
    name: data.name ?? 'Unknown game',
    rating: Number(data.rating ?? 0),
    released: data.released ?? null,
    background_image: data.background_image ?? null,
    platforms: normalizePlatforms(data.platforms)
  };
}

module.exports = { mapGameDocument };
