const { genreService } = require('../services');


module.exports.getGenre = async (req, res) => {
  try {
    const { name } = req.params;
    const { status, response } = await genreService.getGenre(name);
    return res.status(status).send(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};
