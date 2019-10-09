const { Movie } = require('../models');

module.exports.getGenre = async (name) => {
  const movie = await Movie.findOne({ 'genre.name': name });
  if (!movie) {
    return { status: 404, response: `${name} not found` };
  }
  return { status: 200, response: movie.genre };
};
