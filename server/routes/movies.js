const express = require('express');
const passport = require('passport');
const { movieController } = require('../controllers');

const router = express.Router();
const authentication = passport.authenticate('jwt', { session: false });

router.get('/', authentication, movieController.getMovies);
router.get('/:title', authentication, movieController.getMovie);

module.exports = router;
