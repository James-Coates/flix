const clientRoute = require('./client');
const pagesRoute = require('./pages');
const moviesRoute = require('./movies');
const usersRoute = require('./users');
const genresRoute = require('./genres');
const directorsRoute = require('./directors');
const authRoute = require('./auth');

module.exports = (app) => {
  app.use('/', clientRoute);
  app.use('/api/', pagesRoute);
  app.use('/api/movies', moviesRoute);
  app.use('/api/genres', genresRoute);
  app.use('/api/directors', directorsRoute);
  app.use('/api/users', usersRoute);
  app.use('/api/login', authRoute);
};
