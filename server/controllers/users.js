const { validationResult } = require('express-validator');
const { userService } = require('../services');

module.exports.getUsers = async (req, res) => {
  try {
    const { status, response } = await userService.getUsers();
    return res.status(status).json(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};

module.exports.addUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const newUser = req.body;
    const { status, response } = await userService.addUser(newUser);
    return res.status(status).json(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};

module.exports.editUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const currentUsername = req.params.username;
    const modifiedUser = req.body;
    const { status, response } = await userService.editUser(currentUsername, modifiedUser);
    return res.status(status).json(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};

module.exports.addFavouriteMovie = async (req, res) => {
  try {
    const { username, title } = req.params;
    const { status, response } = await userService.addFavouriteMovie(username, title);
    return res.status(status).send(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { username } = req.params;
    const { status, response } = await userService.deleteUser(username);
    return res.status(status).json(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};
