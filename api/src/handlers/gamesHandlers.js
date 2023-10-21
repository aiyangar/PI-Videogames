const { 
  getAllGames, 
  getGameByName,
  getGamesByGenre,
  getGamesByPlatform,
  getGameByID,
  createGameDB 
} = require("../controllers/gamesControllers");

const getGamesHandler = async (req, res) => {
  const { name, genre, platform } = req.query;

  try {
    let filteredGames = await getAllGames();

    if (name) {
      filteredGames = filteredGames.filter((game) =>
        game.name.includes(name)
      );
    }

    if (genre) {
      filteredGames = filteredGames.filter((game) =>
        game.genre.includes(genre)
      );
    }

    if (platform) {
      filteredGames = filteredGames.filter((game) =>
        game.platform.includes(platform)
      );
    }

    if (filteredGames.length === 0) {
      res.status(404).json({ error: 'No se encontraron juegos que coincidan con los filtros' });
    } else {
      res.status(200).json(filteredGames);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



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