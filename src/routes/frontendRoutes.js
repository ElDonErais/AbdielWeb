const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/frontend/index.html'));
});

router.get('/juego_color.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/frontend/juego_color.html'));
});

router.get('/calculadora.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/frontend/calculadora.html'));
});

router.get('/reloj.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/frontend/reloj.html'));
});

router.get('/formulario_contacto.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/frontend/formulario_contacto.html'));
});


module.exports = router;