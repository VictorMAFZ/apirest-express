// Importar servicio para crear un nuevo usuario
const createUserService = require('../services/createUserService');

// Controlador para manejar la ruta POST '/api/users'
const create = (req, res) => {
  const { name, email } = req.body;

  // Crear un nuevo usuario utilizando el servicio createUserService
  const user = createUserService(name, email);

  // Enviar respuesta al cliente con información del usuario creado
  res.send(`Usuario creado: ${user.name} (${user.email})`);
};

// Exportar controlador
module.exports = {
  create
};
