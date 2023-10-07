const axios = require('axios');
const {URL,KEY} = process.env;
const {Genre} = require('../db.js');



const getAllGenres = async (req, res) => {
    const genresDb = await Genre.findAll();

    if (genresDb.length) {
        return genresDb;
    } else {
        const response = await axios.get(`${URL}/genres?key=${KEY}`);
        const genres = response.data.results;

        const genresToInsert = genres.map((genre) => ({
            id: genre.id,
            name: genre.name,
        }));

        genresToInsert.sort((a, b) => a.id - b.id);

        await Genre.bulkCreate(genresToInsert);

        return genresToInsert;
    }
};




// const getAllGenres = async (req, res) => {

//     const genresDb = await Genre.findAll();

//     if (genresDb.length) {
//         return res.json(genresDb)
//     } else {
//         const response = await axios.get(`${URL}/genres?key=${KEY}`);
//         const genres = response.data.results;

//         const genresToInsert = genres.map((genre) => ({
//             id: genre.id,
//             name: genre.name,
//         }));
//         genresToInsert.sort((a, b) => a.id - b.id)
//         await Genre.bulkCreate(genresToInsert);

//         return genresToInsert;
//     }

// }


module.exports = {
    getAllGenres
};