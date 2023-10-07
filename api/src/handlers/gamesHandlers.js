const getGamesHandler = (req, res) => {
    const { name } = req.query;

    if (name) {
        res.status(200).send(`El videojuego ${name}`)
    } else {
        res.status(200).send('Todos los videojuegos')
    }
}

const getGamesDetailHandler = (req, res) => {
    const { id } = req.params;

    res.status(200).send(`El game con el id: ${id}`)
}

const postGamesHandler = (req, res) => {
    const {id, name, description, platforms, image, releaseDate, rating, genre, createdInDb} = req.body;

    res.status(200).send(`El videojuego ${name} con la imagen ${image}, que salió a la venta el ${releaseDate}, tiene un rating de ${rating} y tiene un genero ${genre}, su descripción es la siguiente: ${description} y tiene ${platforms} plataformas`)
}

module.exports = { 
    getGamesHandler,
    getGamesDetailHandler,
    postGamesHandler
}