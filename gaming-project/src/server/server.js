// Punto de entrada del backend para levantar el servidor HTTP.
const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });

const app = require('./app');

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
