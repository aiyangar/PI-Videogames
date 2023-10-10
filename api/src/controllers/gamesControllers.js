const { Op } = require("sequelize");
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const {cleanArray, cleanData} = require('../utils/utilities');
const {URL, KEY} = process.env


const getAllGames = async() => {
    let gamesDB = await Videogame.findAll();
    
    const infoApi = (await axios.get(`${URL}/games?key=${KEY}`)).data.results;
    const gamesApi = cleanArray(infoApi);

    gamesDB = await Promise.all(gamesDB.map(async (game) => {
        if (game.genre) {
            const genreData = await Genre.findByPk(game.genre);
            if (genreData) {
            game.genre = genreData.name;
            }
        }
        return game;
    }));

    return [...gamesDB, ...gamesApi];
}



const getGameByName = async (name) => {
    let gamesDB = await Videogame.findAll({
        where: {
            name: {
            [Op.iLike]: `%${name}%`,
            },
        },
        limit: 15,
    });
    const infoApi = (
        await axios.get(`${URL}/games?search=${name}&key=${KEY}&pageSize=15`)
    ).data.results;
    const gamesApi = cleanArray(infoApi);
    const gamesApiFiltered = gamesApi.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
    );

    gamesDB = await Promise.all(gamesDB.map(async (game) => {
        if (game.genre) {
            const genreData = await Genre.findByPk(game.genre);
            if (genreData) {
            game.genre = genreData.name;
            }
        }
        return game;
    }));

    const result = [...gamesDB, ...gamesApiFiltered];

    if (result.length === 0) {
        return { message: `No se encontró ningún videojuego que coincida con: '${name}'.` };
    }

    return result.slice(0, 15);

};

const getGameByID = async (id, source) => {
    const response =
    source === 'api'
        ? await axios.get(`${URL}/games/${id}?key=${KEY}`)
        : await Videogame.findByPk(id);

    if (source === 'api') {
        const { id, name, description, released, platforms, background_image, rating, genres } = response.data;
    
        const platformsName = platforms.map((data) => data.platform.name);
        const genresName = genres.map((data) => data.name);
    
        return cleanData({ id, name, description, released, platforms: platformsName, background_image, rating, genres: genresName });
    } else {
        const videogame = response;
        
            if (videogame) {
                
                const genreId = videogame.genre;
                const genre = await Genre.findByPk(genreId);
        
                    if (genre) {
                        return {
                            ...cleanData(videogame),
                            genre: genre.name,
                        };
                    }
            }

        return { error: 'Videogame no encontrado o género no encontrado' };
    }
};

const createGameDB = async(key,name, description, platforms, image, releaseDate, rating, genre, created) => {

    return await Videogame.create({key, name, description, platforms, image, releaseDate, rating, genre, created});
}

module.exports = {
    createGameDB,
    getGameByID,
    getAllGames,
    getGameByName
}