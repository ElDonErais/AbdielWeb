require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Importar body-parser
const flash = require('connect-flash');
const session = require('express-session');

const app = express();
const port = 3000;

const frontendRoutes = require('./routes/frontendRoutes');
const backendRoutes = require('./routes/backendRoutes');


// Configurar body-parser para analizar solicitudes de aplicación/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Configurar body-parser para analizar solicitudes de application/json
app.use(bodyParser.json());

// Configuración de express-session
app.use(session({
    secret: process.env.SESSION_SECRET, // // Utiliza la variable de entorno
    resave: true,
    saveUninitialized: true
}));

// Configurar connect-flash
app.use(flash());

app.use('/', frontendRoutes);
app.use('/', backendRoutes);

app.use('/public', express.static(path.join(__dirname, '../public/assets/frontend')));

app.use('/private', express.static(path.join(__dirname, '../public/assets/backend')));

app.use('/src', express.static(path.join(__dirname, '../src/controllers')));


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});