const { Movie } = require('../models');

module.exports.getMovies = async () => {
  const movies = await Movie.find();
  if (!movies) {
    return { status: 404, response: 'No movies found' };
  }
  return { status: 200, response: movies };
};

module.exports.getMovie = async (title) => {
  const movies = await Movie.findOne({ title });
  if (!movies) {
    return { status: 404, response: `${title} not found` };
  }
  return { status: 200, response: movies };
};
