const { Router } = require('express');

const gamesRouter = Router();

gamesRouter.get('/', (req, res) => {
    res.status(200).send('Todos los videojuegos')
})

gamesRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`El id es: ${id}`)
})

gamesRouter.post('/', (req, res) => {
    res.status(200).send('Se creo un videojuego')

})

module.exports = gamesRouter;