const express = require('express');
const router = express.Router();
const path = require('path');
const authMiddleware = require('../controllers/middleware/authMiddleware'); // Importa el middleware
const authController = require('../controllers/backend/authController');

router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/backend/indexadmin.html'));
});

router.get('/manager', authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, '../views/backend/manager.html'));
});

router.post('/manager', authController.login);

router.get('/deslogear', authController.logout);

module.exports = router;