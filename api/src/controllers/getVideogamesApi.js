const axios = require('axios');

module.exports = async (APIKEY) => {
    const fetch1 = await axios(`https://api.rawg.io/api/games?key=${APIKEY}&page_size=40`);
    const fetch2 = await axios(`https://api.rawg.io/api/games?key=${APIKEY}&page_size=40&offset=40`);
    const fetch3 = await axios(`https://api.rawg.io/api/games?key=${APIKEY}&page_size=40&offset=80`);

    const videogamesFromAPI = [...fetch1.data.results, ...fetch2.data.results, ...fetch3.data.results].map(game => {
        return {
            id: game.id,
            name: game.name,
            released: game.released,
            image: game.background_image,
            rating: game.rating,
            platforms: game.platforms.map(platform => platform.platform.name),
            genres: game.genres.map(genre => genre.name)
        }
    });
    return videogamesFromAPI;
};