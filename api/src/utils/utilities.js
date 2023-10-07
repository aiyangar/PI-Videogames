const infoCleaner = (array) => {
    return array.map(item => {
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            platforms: item.platforms,
            image: item.background_image,
            released: item.released,
            rating: item.rating,
            genre: item.genres,
            createdInDb: false
        }
    })
}

const cleanData = (element) => ({
    "id": element.id,
    "name": element.name,
    "description": element.description,
    "platforms": element.platforms,
    "image": element.background_image,
    "released": element.released,
    "rating": element.rating,
    "genre": element.genres,
    "createdInDb": false
})

module.exports = { infoCleaner, cleanData }