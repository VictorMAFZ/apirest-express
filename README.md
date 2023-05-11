# apirest-express
# En resumen, la aplicación es una API muy simple que consta de cuatro archivos: app.js, routes.js, controllers/homeController.js, controllers/userController.js, y services/createUserService.js.
# El archivo app.js es el punto de entrada de la aplicación. Configura el middleware para analizar el cuerpo de las solicitudes entrantes y utiliza el enrutador definido en routes.js para manejar las solicitudes entrantes.
# El archivo routes.js define las rutas de la aplicación y utiliza controladores para manejar las solicitudes HTTP. Los controladores se definen en los archivos homeController.js y userController.js.
# El archivo homeController.js define un controlador para manejar la solicitud GET para la ruta raíz '/'. Este controlador simplemente envía una respuesta con un mensaje de "¡Hola, mundo!".
# El archivo userController.js define un controlador para manejar la solicitud POST para la ruta '/api/users'. Este controlador utiliza el servicio definido en createUserService.js para crear un nuevo usuario utilizando la información recibida en el cuerpo de la solicitud. Luego, envía una respuesta al cliente con información del usuario creado.
# El archivo `createUserService.js` define un servicio que contiene la lógica para crear un nuevo usuario. En este caso, el servicio simplemente crea un objeto de usuario con el nombre y el correo electrónico proporcionados y lo devuelve al controlador.
# Es importante destacar que, aunque en este ejemplo se utilizó una estructura muy simple y se definió todo en archivos separados, en aplicaciones más complejas es recomendable utilizar una estructura de carpetas y archivos que permita una mejor organización y mantenimiento del código. Por ejemplo, se puede dividir el código en diferentes módulos, cada uno con su propia responsabilidad.
# Para probar la API en Postman, puedes seguir los siguientes pasos:
# Asegúrate de que la aplicación esté en ejecución. Para hacerlo, abre una terminal en la carpeta raíz del proyecto y ejecuta el comando node app.js.
# Abre Postman y crea una nueva solicitud. Para ello, haz clic en "Nueva pestaña" en la parte superior izquierda de la ventana de Postman y selecciona "Solicitud".
# En la ventana de solicitud, asegúrate de que el método HTTP sea GET y la URL sea http://localhost:3000/.
# Haz clic en "Enviar" para enviar la solicitud. Deberías ver una respuesta con el mensaje "¡Hola, mundo!".
# Ahora, vamos a probar la solicitud POST /api/users para crear un nuevo usuario. Crea una nueva solicitud en Postman, asegurándote de que el método HTTP sea POST y la URL sea http://localhost:3000/api/users.
# En la pestaña "Cuerpo", selecciona "raw" y asegúrate de que el tipo de contenido sea "JSON (application/json)".
# En el cuadro de texto, ingresa un objeto JSON con el nombre y el correo electrónico del usuario que quieres crear. Por ejemplo:
# { "name": "Juan Perez","email": "jperez@example.com"}
# Haz clic en "Enviar" para enviar la solicitud. Deberías ver una respuesta con un mensaje que indica que se creó el usuario, por ejemplo: "Usuario creado: Juan Perez (jperez@example.com)".
