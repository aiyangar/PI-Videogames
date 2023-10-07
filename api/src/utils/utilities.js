const cleanArray = (arr) => {
    return arr.map(elem => {
        const platforms = [elem.platforms, elem.parent_platforms]
            .flatMap(platform => platform.map(p => p.platform.name))
            .filter((name, index, arr) => arr.indexOf(name) === index);
        const genres = elem.genres.map(g => g.id);
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

const cleanData = (element) => ({
    "id": element.id,
    "name": element.name,
    "description": element.description,
    "platforms": element.platforms,
    "image": element.background_image,
    "released": element.released,
    "rating": element.rating,
    "genre": element.genres,
    "created": false
})

module.exports = { cleanArray, cleanData }