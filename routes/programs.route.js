const express = require('express');
const router = express.Router();
const SimpleProgramController = require('../controller/SimpleProgramController');

// Ruta de ejemplo
router.post('/simple', SimpleProgramController.basicProgram);

module.exports = router;
