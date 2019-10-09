// const { directorService } = require('../services');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const jwtSecret = 'poppydog';

const generateJWTToken = (user) => jwt.sign(user, jwtSecret, {
  subject: user.username,
  expiresIn: '7d',
  algorithm: 'HS256',
});

module.exports.login = async (req, res, next) => {
  try {
    return passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        const response = {
          message: `Something is not right: ${info.message}`,
          user,
        };
        return res.status(400).json(response);
      }
      return req.login(user, { session: false }, (err) => {
        if (err) {
          return res.status(404).json(err);
        }
        const token = generateJWTToken(user.toJSON());
        return res.status(200).json({ user, token });
      });
    })(req, res, next);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};
