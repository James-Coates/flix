const passport = require('passport');
const express = require('express');
const { directorController } = require('../controllers');

const router = express.Router();

router.get('/:name', passport.authenticate('jwt', { session: false }), directorController.getDirector);

module.exports = router;
