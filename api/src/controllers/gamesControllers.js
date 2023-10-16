const { Videogame } = require('../db');
const { Sequelize } = require('sequelize');
const axios = require('axios');
const {URL, KEY} = process.env;
const {cleanData, cleanArray} = require('../utils/utilities');

const getAllGames = async() => {
  const gamesDB = await Videogame.findAll();

  const infoApi = (await axios.get(`${URL}/games?key=${KEY}`)).data.results;
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

  const infoApi = (await axios.get(`${URL}/games?key=${KEY}`)).data.results;
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


const getGameByID = async(id, source) => {
  if (source === 'api') {
    const infoApi = (await axios.get(`${URL}/games/${id}?key=${KEY}`)).data;
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
  getGameByID,
  createGameDB
}