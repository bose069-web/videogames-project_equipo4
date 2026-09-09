const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: './backend/.env' });

const RAWG_BASE_URL = 'https://api.rawg.io/api';

function main() {
  const output = [];
  output.push(`RAWG_BASE_URL: ${RAWG_BASE_URL}`);
  output.push(`ENV loaded: ${Boolean(process.env.RAWG_API_KEY || process.env.RAWG_KEY || process.env.RAWG_TOKEN)}`);
  console.log(output.join('\n'));
}

if (require.main === module) {
  main();
}
