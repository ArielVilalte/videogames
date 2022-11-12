const { Videogame, Genre } = require('../db');

module.exports = async () => {
    const videogamesFromDB = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });

    const videogamesDB = videogamesFromDB.map(game => {
        return {
            id: game.id,
            name: game.name,
            released: game.released,
            image: game.background_image,
            rating: game.rating,
            platforms: game.platforms,
            genres: game.genres.map(genre => genre.name),
            created: game.created
        }
    });
    return videogamesDB;
};