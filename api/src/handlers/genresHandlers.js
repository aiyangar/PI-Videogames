const getGenresHandler = (req, res) => {
    res.status(200).send('All genres');
}

const postGenresHandler = (req, res) => {
    res.status(200).send('New genre');
}

module.exports = {
    getGenresHandler,
    postGenresHandler
}