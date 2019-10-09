const passport = require('passport');
const express = require('express');
const genreController = require('../controllers/genres');

const router = express.Router();

router.get('/:name', passport.authenticate('jwt', { session: false }), genreController.getGenre);

module.exports = router;
