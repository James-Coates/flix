const express = require('express');
const { authController } = require('../controllers');
require('../config/passport');

const router = express.Router();

router.post('/', (req, res, next) => authController.login(req, res, next));

module.exports = router;
