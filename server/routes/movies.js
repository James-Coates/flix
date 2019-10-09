const express = require('express');
const passport = require('passport');
const { movieController } = require('../controllers');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), movieController.getMovies);
router.get('/:title', passport.authenticate('jwt', { session: false }), movieController.getMovie);

module.exports = router;
