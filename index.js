const express = require('express');
const programs_route = require('./routes/programs.route');

// variables de entorno
require('dotenv').config();

const app = express();

app.use(express.json());

// Rutas
app.use('/programs', programs_route);

// Puerto de escucha
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
