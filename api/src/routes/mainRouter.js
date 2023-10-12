const { Router } = require('express');

const mainRouter = Router();

mainRouter.get('/videogames', (req, res, ) => {
  res.status(200).send({ message: 'Aquí están todos los videojuegos' });
});

mainRouter.get('/videogames/:id', (req, res, ) => {
  const { id } = req.params;

  res.status(200).send({ message: `Aquí está el videojuego ${id} `});
});

mainRouter.post('/videogames', (req, res, ) => {
  res.status(200).json({ message: 'Se creó el videojuego' });

});

mainRouter.get('/genres', (req, res, ) => {
  res.status(200).send({ message: 'Aquí están todos los generos' });
});

module.exports = mainRouter;
