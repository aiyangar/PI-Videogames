const axios = require('axios');
const {URL, KEY} = process.env;
const APIURL = `${URL}/games?key=${KEY}&page_size=25`

const cleanArray = (arr) => {
    return arr.map((elem) => {
        const platforms = [elem.platforms, elem.parent_platforms]
            .flatMap(platform => platform.map(p => p.platform.name))
            .filter((name, index, arr) => arr.indexOf(name) === index);
        
        const genres = elem.genres.map(genreData => genreData.name);
        return {
            id: elem.id,
            name: elem.name,
            description: elem.description,
            platform: platforms,
            image: elem.background_image,
            released: elem.released,
            rating: elem.rating,
            genre: genres,
            created: false
        };
    });
};

const cleanData = (element) => {
    const platforms = element.platforms.map((platformData) => platformData.platform.name);
    
    const genres = element.genres.map((genreData) => genreData.name);

    return {
    "id": element.id,
    "name": element.name,
    "description": element.description,
    "platforms": platforms,
    "image": element.background_image,
    "released": element.released,
    "rating": element.rating,
    "genre": genres,
    "created": false
    };
};

const getCombinedInfoApi = async () => {
    try {
        const pageNumbers = [1, 2, 3, 4];
        const promises = pageNumbers.map((page) => axios.get(`${APIURL}&page=${page}`));
        const responses = await Promise.all(promises);
        const combinedResults = responses.reduce((combined, response) => {
            return combined.concat(response.data.results);
        }, []);
    
        return combinedResults;
    } catch (error) {
        throw new Error('Error al obtener información de la API: ' + error.message);
    }
};



module.exports = { cleanArray, cleanData, getCombinedInfoApi  }