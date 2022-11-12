const axios = require('axios');
const { UUID } = require('sequelize');
const { Videogame, Genre } = require('../db');
const getVideogamesApi = require('./getVideogamesApi' );
const getVideogamesDb = require('./getVideogamesDb' );
const { APIKEY } = process.env;

module.exports = async (id) => {
    let gameDetails = await axios(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
    .then(res => {return res.data})
    .catch(res => {return res.data});
    if(gameDetails) {
        gameDetails = {
            id: gameDetails.id,
            name: gameDetails.name,
            released: gameDetails.released,
            image: gameDetails.background_image,
            rating: gameDetails.rating,
            platforms: gameDetails.platforms.map(platform => platform.platform.name),
            genres: gameDetails.genres.map(genre => genre.name),
            description: gameDetails.description
        };
        return gameDetails;
    };
    
    const allDbGames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });
    const dbGames = allDbGames.map(game => {
        return {
            ...game,
            id: game.id.toString(),
            genres: game.genres.map(game => game.name)
        }
    })
    
    const findGame = dbGames.find(game => game.id === id);
    
    if(findGame) {
        const gameDetails = {
            ...findGame.dataValues,
            genres: findGame.dataValues.genres.map(genre => genre.dataValues.name)
        }
        return gameDetails;
    }
    
    return 'No existe ningún juego con ese ID';
};

