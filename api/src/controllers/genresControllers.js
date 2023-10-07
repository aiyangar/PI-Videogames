const axios = require('axios');
const {URL,KEY} = process.env;
const {Genre} = require('../db.js');
    
    const createGenre = async ()=> 
    await axios.get(`${URL}/genres?key=${KEY}`)
    .then(async(response)=>{
        const data = response.data.results;
        const genres = data.map((genre) => genre.name);
        console.log(genres)
        const newGenres = await Genre.bulkCreate(genres.map((name) => ({ name })));
        console.log(data)
});

module.exports = createGenre;