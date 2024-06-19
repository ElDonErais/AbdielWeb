# Proyecto Web

Este proyecto es una colección de aplicaciones web desarrolladas como parte de mi aprendizaje y práctica en desarrollo web. Incluye una variedad de funcionalidades frontend implementadas con tecnologías web modernas.

## Características

- **Cambio de Colores**: Una aplicación interactiva que permite a los usuarios cambiar el color de fondo de la página.
- **Calculadora**: Una calculadora funcional que permite realizar operaciones básicas.
- **Reloj**: Un reloj digital y analógico que muestra la hora actual.

## Tecnologías Utilizadas

- HTML5 y CSS3 para la estructura y el diseño.
- JavaScript para la interactividad.
- Firebase para la autenticación y el almacenamiento de datos.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Tener instalado `NodeJS` en tu ordenador.
3. Navega al directorio del proyecto.
4. Instalar express con el comando `npm install express` en la carpeta raiz del proyecto.
5. Instalar dotenv con el comando `npm install dotenv` en la carpeta raiz del proyecto.
6. Extraer el archivo zip llamada `credenciales.zip` en el cual adentro habran dos archivos, uno que tiene el firebaseconfig que se necesitara en la instruccion n°9 y el segundo archivo es el `.env` el cual es necesario para la conexion con la base de datos y debe moverse a la carpeta raiz del proyecto.
7. Iniciar xampp con apache y mysql, crear en phpmyadmin una base de datos llamada `db_node` e importar los datos del archivo db_node.sql en la carpeta db ubicada en la carpeta raiz del proyecto.
8. Importante mantener xampp activado para la autenticacion de usuarios.
9. Reemplazar las lineas de codigo donde se necesiten las credenciales de Firebase las cuales son 5:
   - firebaseconect.js
   - formulariobackend.js
   - loginadmingoogle.js
   - firebaseconectfn.js
   - formulariofn.js
10. Ejecuta `npm start` en la terminal en la raiz del proyecto.
11. Abre tu navegador y escribe en la barra de navegacion lo siguiente: `localhost:3000`
12. Para acceder al logeo de administrador y asi acceder a la pagina de admnistracion escribe en la barra de navegacion: `localhost.3000/admin`

Nota1: En la pagina de admnistracion habran tres campos que vienen llenados por defecto, el primer campo cambiara el texto que esta despues de "Bienvenido" en el index (`localhost:3000`) representa el nombre, el segundo campo modifica el texto al lado derecho de el primer texto y que representa su apellido y el ultimo campo modifica el texto de un boton en la pagina `localhost:3000/juego_color.html`.

Nota2: Las credenciales de la base de datos a reemplazar junto con el correo y contraseña necesarios para poder acceder a la pagina de administrador y tambien hacer funcionar `Firebaseconfig` en la pagina estaran en un archivo zip el cual su contraseña solo estara disponible al docente que evalue este proyecto.

## Contribuir

Las contribuciones son bienvenidas. Si tienes alguna sugerencia para mejorar alguna de las aplicaciones o quieres añadir una nueva funcionalidad, no dudes en crear un pull request.

## Licencia

Consulta el archivo `LICENSE` para más detalles.

---

Proyecto desarrollado por Abdiel García.
