// Servicio para crear un nuevo usuario
const create = (name, email) => {
  // Lógica para crear un nuevo usuario
  const user = {
    name,
    email
  };
  return user;
};

// Exportar servicio
module.exports = create;
