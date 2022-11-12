const { Genre } = require('../db');

module.exports = async () => {
    const genres = await Genre.findAll();
    return genres;
};