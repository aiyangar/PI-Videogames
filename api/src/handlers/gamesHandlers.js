const { 
    createGameDB,
    getGameByID,
    getAllGames,
    getGameByName
} = require('../controllers/gamesControllers')

const getGamesHandler = async(req, res) => {
    const { name } = req.query;

    try {
        if (name) {
            const gameByName = await getGameByName(name)
            res.status(200).json(gameByName)
        } else {
            const response = await getAllGames()
            res.status(200).json(response)   
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getGamesDetailHandler = async(req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? 'db' : 'api';

    try {
        const response = await getGameByID(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postGamesHandler = async(req, res) => {
    const {id, name, description, platforms, image, releaseDate, rating, genre, created} = req.body;

    try {
        const response = await createGameDB(id, name, description, platforms, image, releaseDate, rating, genre, created)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { 
    getGamesHandler,
    getGamesDetailHandler,
    postGamesHandler
}