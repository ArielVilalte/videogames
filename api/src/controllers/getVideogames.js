const getVideogamesApi = require('./getVideogamesApi');
const getVideogamesDb = require('./getVideogamesDb');

module.exports = async (APIKEY) => {  
    const videogamesFromApi = await getVideogamesApi(APIKEY);
    const videogamesFromDB = await getVideogamesDb();

    return [...videogamesFromApi, ...videogamesFromDB];
};
