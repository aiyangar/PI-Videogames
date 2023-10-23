const { Videogame } = require('../db');
const { Sequelize } = require('sequelize');
const axios = require('axios');
const {URL, KEY} = process.env;
const {cleanData, cleanArray, getCombinedInfoApi} = require('../utils/utilities');

const getAllGames = async() => {
  const gamesDB = await Videogame.findAll();

  const infoApi = await getCombinedInfoApi();
  const gamesApi = cleanArray(infoApi);

  return [...gamesDB, ...gamesApi]
}


const getGameByName = async (name) => {
  const lowerCaseName = name.toLowerCase();
  const allGames = await getAllGames();

  const gamesFilteredByName = allGames.filter((Videogame) =>
    Videogame.name.toLowerCase().includes(lowerCaseName)
  ).slice(0, 15);

  if (gamesFilteredByName.length === 0) {
    return 'No fue encontrado ningún juego que coincida con ese nombre';
  }

  return gamesFilteredByName;
};

const getGamesByGenre = async (genre, allGames) => {
  const gamesFilteredByGenre = allGames.filter((Videogame) =>
    Videogame.genre.includes(genre)
  );

  return gamesFilteredByGenre;
};

const getGamesByPlatform = async (platform, allGames) => {
  const gamesFilteredByPlatform = allGames.filter((Videogame) =>
    Videogame.platform.includes(platform)
  );

  return gamesFilteredByPlatform;
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

const sortGames = (games, criteria, ascending) => {
  const criteriaMap = {
    nombre: 'name',
    rating: 'rating',
  };
  const key = criteriaMap[criteria] || 'name'; // Por defecto, ordenar por nombre.

  const sortedGames = games.slice().sort((a, b) => {
    const valueA = key === 'name' ? a[key].toLowerCase() : a[key];
    const valueB = key === 'name' ? b[key].toLowerCase() : b[key];

    let comparison = 0; // Inicialmente, sin cambios en la ordenación

    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }

    return comparison; // No aplicar la dirección de ordenación todavía
  });

  return ascending === 'true' ? sortedGames : sortedGames.reverse();
};





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
  sortGames,
  createGameDB
}