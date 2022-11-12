const { Videogame } = require('../db');

module.exports = async (name, description, released, rating, platforms, genresIds) => {
    platforms = platforms.join(', ');
    const newGame = await Videogame.create({name, description, released, rating, platforms});
    await newGame.addGenres(genresIds);
    return newGame;
};