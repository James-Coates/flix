const { Movie } = require('../models');

module.exports.getDirector = async (name) => {
  const movie = await Movie.findOne({ 'director.name': name });
  if (!movie) {
    return { status: 404, response: `${name} not found` };
  }
  return { status: 200, response: movie.director };
};
