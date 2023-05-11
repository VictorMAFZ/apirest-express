// Controlador para manejar la ruta '/'
const index = (req, res) => {
  res.send('¡Hola, mundo!');
};

// Exportar controlador
module.exports = {
  index
};
