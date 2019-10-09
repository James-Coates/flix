const pagesRoute = require('./pages');
const moviesRoute = require('./movies');
const usersRoute = require('./users');
const genresRoute = require('./genres');
const directorsRoute = require('./directors');
const authRoute = require('./auth');

module.exports = (app) => {
  app.use('/', pagesRoute);
  app.use('/movies', moviesRoute);
  app.use('/genres', genresRoute);
  app.use('/directors', directorsRoute);
  app.use('/users', usersRoute);
  app.use('/login', authRoute);
};
