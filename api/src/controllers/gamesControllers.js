const { Videogame } = require('../db');
const { Sequelize } = require('sequelize');
const axios = require('axios');
const {URL, KEY} = process.env;
const {cleanData, cleanArray, getCombinedInfoApi} = require('../utils/utilities');
const APIURL = `${URL}/games?key=${KEY}`

const getAllGames = async() => {
  const gamesDB = await Videogame.findAll();

  const infoApi = await getCombinedInfoApi();
  const gamesApi = cleanArray(infoApi);

  return [...gamesDB, ...gamesApi]
}

const getGameByName = async (name) => {
  const lowerCaseName = name.toLowerCase();

  const gameDBFiltered = await Videogame.findAll({
      where: {
          name: { [Sequelize.Op.iLike]: `%${name}%` }
      },
      limit: 15
  });

  const infoApi = await getCombinedInfoApi();
  const gamesApi = cleanArray(infoApi);

  const gameApiFiltered = gamesApi
      .filter((videogame) => videogame.name.toLowerCase().includes(lowerCaseName))
      .slice(0, 15);

  const mergedGames = [...gameDBFiltered, ...gameApiFiltered];

  if (mergedGames.length === 0) {
    return 'No fue encontrado ningún juego que coincida con ese nombre';
  }

  return mergedGames;
};

const getGamesByGenre = async (genre) => {
  const allGames = await getAllGames();
  const gamesFilteredByGenre = allGames.filter((game) =>
    game.genre.includes(genre)
  );

  return gamesFilteredByGenre;
}


const getGamesByPlatform = async (platform) => {
  const allGames = await getAllGames();
  const gamesFilteredByPlatform = allGames.filter((game) =>
    game.platform.includes(platform)
  );

  return gamesFilteredByPlatform;
}

const getGameByID = async(id, source) => {
  if (source === 'api') {
  const infoApi = (await axios.get(`${APIURL}`)).data;
    const game = cleanData(infoApi);
    return game;
  } else {
      const game = await Videogame.findByPk(id);
      return game;
  }
}

const createGameDB = async(id, name, description, platform, image, released, rating, genre, created) => {

    return await Videogame.create({
      id,
      name,
      description,
      platform,
      image,
      released,
      rating,
      genre,
      created
    })
}

module.exports = {
  getAllGames,
  getGameByName,
  getGamesByGenre,
  getGamesByPlatform,
  getGameByID,
  createGameDB
}