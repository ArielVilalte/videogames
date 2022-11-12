const axios = require('axios');
const { Genre } = require('../db');

module.exports = async (APIKEY) => {
    const genresDB = await Genre.findAll();
    if(!genresDB.length) {
        const fetch = await axios(`https://api.rawg.io/api/genres?key=${APIKEY}`);
        const genresToDB = fetch.data.results.map(genre => {
            return {
                name: genre.name
            };
        });
        await Genre.bulkCreate(genresToDB);
    } 
};