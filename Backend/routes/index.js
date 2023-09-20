const express = require('express');
const handleRegister = require('../controllers/handleRegister');
const handleLogin = require('../controllers/handleLogin');

const router = express.Router();

router.post('/');
router.post('/login', handleLogin)
router.post('/register', handleRegister)

module.exports = router;