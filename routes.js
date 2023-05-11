// Importar dependencias
const express = require('express');

// Crear instancia de enrutador
const router = express.Router();

// Importar controladores
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');

// Configurar rutas del enrutador
router.get('/', homeController.index);
router.post('/api/users', userController.create);

// Exportar enrutador
module.exports = router;
