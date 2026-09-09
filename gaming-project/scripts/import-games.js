require('dotenv').config({ path: './backend/.env' });

const RAWG_BASE_URL = 'https://api.rawg.io/api';

const toPlatformNames = (platforms) => (platforms ?? []).map((p) => p?.platform?.name).filter(Boolean);

module.exports = {
  RAWG_BASE_URL,
  toPlatformNames
};
