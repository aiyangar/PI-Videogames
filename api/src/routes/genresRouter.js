const { Router } = require('express');

const genresRouter = Router();

genresRouter.get('/', (req, res) => {
    res.status(200).send('All genres');
});

genresRouter.post('/', (req, res) => {
    res.status(200).send('New genre');

});

module.exports = genresRouter;