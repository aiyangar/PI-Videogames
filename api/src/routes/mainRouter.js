const { Router } = require('express');
const gamesRouter = require('./gamesRouter');
const genresRouter = require('./genresRouter');
const platformsRouter = require('./platformsRouter');

const mainRouter = Router();

mainRouter.use('/videogames', gamesRouter);
mainRouter.use('/genres', genresRouter);
mainRouter.use('/platforms', platformsRouter)


module.exports = mainRouter;
