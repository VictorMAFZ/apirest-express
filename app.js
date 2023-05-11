// Importar dependencias
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Crear instancia de la aplicación
const app = express();

// Configurar middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Configurar rutas de la aplicación
app.use(routes);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
