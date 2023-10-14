const { Router } = require('express');

const gamesRouter = Router();

const { getGamesHandler, 
  getDetailHandler,
  createGameHandler
} = require('../handlers/gamesHandlers');

gamesRouter.get('/', getGamesHandler); //videogames/?name:chuchita
gamesRouter.get('/:id', getDetailHandler); //videogames/1

gamesRouter.post('/', createGameHandler);

module.exports = gamesRouter;