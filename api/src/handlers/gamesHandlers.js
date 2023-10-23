const { 
  getAllGames, 
  getGameByName,
  getGamesByGenre,
  getGamesByPlatform,
  getGameByID,
  sortGames,
  createGameDB 
} = require("../controllers/gamesControllers");


const getGamesHandler = async (req, res) => {
  const { name, genre, platform, criteria, ascending } = req.query;

  try {
    if (!name && !genre && !platform) {
      const allGames = await getAllGames();
      if (criteria) {
        const sortedGames = sortGames(allGames, criteria, ascending);
        res.status(200).json(sortedGames);
      } else {
        res.status(200).json(allGames);
      }
    } else {
      let filteredGames = await getAllGames();

      if (name) {
        filteredGames = await getGameByName(name, filteredGames);
      }

      if (genre) {
        const genres = Array.isArray(genre) ? genre : [genre];

        for (const g of genres) {
          filteredGames = await getGamesByGenre(g, filteredGames);
        }
      }

      if (platform) {
        const platforms = Array.isArray(platform) ? platform : [platform];

        for (const p of platforms) {
          filteredGames = await getGamesByPlatform(p, filteredGames);
        }
      }

      if (criteria) {
        filteredGames = sortGames(filteredGames, criteria, ascending);
      }

      if (filteredGames.length === 0) {
        res.status(404).json({ error: 'No se encontraron juegos que coincidan con los filtros' });
      } else {
        res.status(200).json(filteredGames);
      }
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