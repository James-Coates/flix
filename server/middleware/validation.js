const { check } = require('express-validator');

module.exports.addUserDetails = [
  check('username', 'Username required').isLength({ min: 5 }),
  check('username', 'Username must contain alphanumeric characters only').isAlphanumeric(),
  check('password', 'Password is required').not().isEmpty(),
  check('email', 'Email does not appear to be valid').isEmail(),
];

module.exports.editUserDetails = [
  check('username', 'Username required').isLength({ min: 5 }),
  check('username', 'Username must contain alphanumeric characters only').isAlphanumeric(),
  check('email', 'Email does not appear to be valid').isEmail(),
];
