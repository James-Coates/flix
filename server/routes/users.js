const express = require('express');
const passport = require('passport');

const userController = require('../controllers/users');
const validationMiddleware = require('../middleware/validation');

const authentication = passport.authenticate('jwt', { session: false });

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:username', authentication, userController.getUser);
router.post('/', validationMiddleware.addUserDetails, userController.addUser);
router.put('/:username', validationMiddleware.editUserDetails, authentication, userController.editUser);
router.post('/:username/movies/:title', authentication, userController.addFavouriteMovie);
router.delete('/:username', authentication, userController.deleteUser);

module.exports = router;
