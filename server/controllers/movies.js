const { movieService } = require('../services');

module.exports.getMovies = async (req, res) => {
  try {
    const { status, response } = await movieService.getMovies();
    return res.status(status).send(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};

module.exports.getMovie = async (req, res) => {
  try {
    const { title } = req.params;
    const { status, response } = await movieService.getMovie(title);
    return res.status(status).send(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};
