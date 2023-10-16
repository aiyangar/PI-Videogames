const { 
  getAllGames, 
  getGameByName,
  getGameByID,
  createGameDB 
} = require("../controllers/gamesControllers");

const getGamesHandler = async(req, res, ) => {
  const { name } = req.query;

  try {
    if (name) {
      const gameByName = await getGameByName(name);
      res.status(200).json(gameByName);
    } else {
      const allGames = await getAllGames();
      res.status(200).json(allGames);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getDetailHandler = async(req, res, ) => {
  const { id } = req.params;

  const source = isNaN(id) ? 'db' : 'api';

  try {
    const response = await getGameByID(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  

    res.status(200).send({ message: `Aquí está el videojuego ${id} `});
  }
}

const createGameHandler = async(req, res, ) => {
  const { id, name, description, platform, image, released, rating, genre, created } = req.body;
  try {
    const response = await createGameDB(id, name, description, platform, image, released, rating, genre, created);
    res.status(200).json(response);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  
  }
}

module.exports = { 
  getGamesHandler, 
  getDetailHandler,
  createGameHandler
};