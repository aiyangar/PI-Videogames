const { Router } = require('express');

const gamesRouter = Router();

const { 
    getGamesHandler, 
    getGamesDetailHandler,
    postGamesHandler
} = require('../handlers/gamesHandlers');



gamesRouter.get('/', getGamesHandler)
gamesRouter.get('/:id', getGamesDetailHandler)
gamesRouter.post('/', postGamesHandler)

module.exports = gamesRouter;