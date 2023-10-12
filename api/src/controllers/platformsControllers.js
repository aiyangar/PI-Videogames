const axios = require('axios');
const {URL,KEY} = process.env;
const {Platform} = require('../db.js');


const getAllPlatforms = async (req, res) => {
  const platformsDb = await Platform.findAll();

  if (platformsDb.length) {
    return platformsDb;
  } else {
    const response = await axios.get(`${URL}/platforms?key=${KEY}`);
    const platforms = response.data.results;
    const platformsToInsert = platforms.map((platform) => ({
        id: platform.id,
        name: platform.name,
    }));
    platformsToInsert.sort((a, b) => a.id - b.id);
    

    await Platform.bulkCreate(platformsToInsert);

    return platformsToInsert;
  }
};


module.exports = {
    getAllPlatforms
};