const { getAllPlatforms } = require('../controllers/platformsControllers');


const getPlatformsHandler = async(req, res, ) => {

  try {
    const allPlatforms = await getAllPlatforms();
    res.status(200).json(allPlatforms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getPlatformsHandler,
}