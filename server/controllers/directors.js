const { directorService } = require('../services');

module.exports.getDirector = async (req, res) => {
  try {
    const { name } = req.params;
    const { status, response } = await directorService.getDirector(name);
    return res.status(status).send(response);
  } catch (err) {
    return res.status(500).send(`Error: ${err}`);
  }
};
