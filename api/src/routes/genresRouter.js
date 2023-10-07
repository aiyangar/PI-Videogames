const { Router } = require('express');

const genresRouter = Router();

const { 
    getGenresHandler,
    postGenresHandler 
} = require('../handlers/genresHandlers');

genresRouter.get('/', getGenresHandler);

genresRouter.post('/', postGenresHandler);

module.exports = genresRouter;