const getGamesHandler = (req, res) => {
    res.status(200).send('Todos los videojuegos')
}

const getGamesDetailHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`El game con el id: ${id}`)
}

const postGamesHandler = (req, res) => {
    res.status(200).send('Se creo un videojuego')

}

module.exports = { 
    getGamesHandler,
    getGamesDetailHandler,
    postGamesHandler
}