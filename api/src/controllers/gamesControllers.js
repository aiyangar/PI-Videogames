const { Op } = require("sequelize");
const axios = require('axios');
const { Videogame } = require('../db');
const {cleanArray, cleanData} = require('../utils/utilities');
const {URL, KEY} = process.env


const getAllGames = async() => {
    const gamesDB = await Videogame.findAll();
    const infoApi = (await axios.get(`${URL}/games?key=${KEY}`)).data.results;
    const gamesApi = cleanArray(infoApi);

    return [...gamesDB, ...gamesApi];
}

const getGameByName = async (name) => {
    const gamesDB = await Videogame.findAll({
        where: {
            name: {
            [Op.iLike]: `%${name}%`
            }
        },
        limit: 15
    });
    const infoApi = (await axios.get(`${URL}/games?search=${name}&key=${KEY}&pageSize=15`)).data.results;
    const gamesApi = cleanArray(infoApi);
    const gamesApiFiltered = gamesApi.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
    const result = [...gamesDB, ...gamesApiFiltered];
    if (result.length === 0) {
        return { message: `No se encontró ningún videojuego que coincida con: '${name}'.` };
    }
    return result.slice(0, 15);
};

const getGameByID = async(id, source) => {
    console.log(URL)
    console.log(KEY)
    const response =
        source === 'api'
        ? (await axios.get(`${URL}/games/${id}?key=${KEY}`))
        : (await Videogame.findByPk(id));

        if (source === "api") {
            const { id,name, description, released, platforms,background_image,rating,genres} = response.data;

            const platformsName = platforms.map(data => data.platform.name);
            genresName = genres.map(data=>data.name); 

            const cleanedData = cleanData({id, name, description, released, platforms: platformsName,background_image,rating,genres: genresName})

            return cleanedData;
        } else {
            return response;
        }
}

const createGameDB = async(key,name, description, platforms, image, releaseDate, rating, genre, created) => {

    return await Videogame.create({key, name, description, platforms, image, releaseDate, rating, genre, created});
}

module.exports = {
    createGameDB,
    getGameByID,
    getAllGames,
    getGameByName
}