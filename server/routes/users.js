const express = require('express');
const userController = require('../controllers/users');

const validationMiddleware = require('../middleware/validation');

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/', validationMiddleware.userDetails, userController.addUser);
router.put('/:username', validationMiddleware.userDetails, userController.editUser);
router.post('/:username/movies/:title', userController.addFavouriteMovie);
router.delete('/:username', userController.deleteUser);

module.exports = router;
