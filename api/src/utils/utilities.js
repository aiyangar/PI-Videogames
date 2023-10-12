const cleanArray = (arr) => {
    return arr.map((elem) => {
        const platforms = [elem.platforms, elem.parent_platforms]
            .flatMap(platform => platform.map(p => p.platform.name))
            .filter((name, index, arr) => arr.indexOf(name) === index);
        
        // Extraer los nombres de los géneros
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
    // Extraer los nombres de las plataformas
    const platforms = element.platforms.map((platformData) => platformData.platform.name);
    
    // Extraer los nombres de los géneros
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




// const cleanData = (element) => ({
//     "id": element.id,
//     "name": element.name,
//     "description": element.description,
//     "platforms": element.platforms,
//     "image": element.background_image,
//     "released": element.released,
//     "rating": element.rating,
//     "genre": element.genres,
//     "created": false
// })

module.exports = { cleanArray, cleanData }