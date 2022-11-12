const { Router } = require('express');
const { getVideogames, getDetails, createVideogame } = require('../controllers')
const { APIKEY } = process.env;

const videogamesRouter = Router();

videogamesRouter.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        const games = await getVideogames(APIKEY);
        if(!name) return res.status(200).send(games);
        const filteredGames = games.filter(game => game.name.toLowerCase().includes(name.toLowerCase()));
        if(!filteredGames.length) return res.status(200).send('No existen juegos con ese nombre');
        const gamesToFront = filteredGames.filter(game => filteredGames.indexOf(game) < 15);    // envío solo hasta 15 juegos que matcheen la busqueda
        res.status(200).send(gamesToFront)
    } catch (error) {
        res.status(404).send({error: error.message});
    }
});

videogamesRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const details = await getDetails(id);
        res.status(200).send(details);
    } catch (error) {
        res.status(404).send({error: error.message}); 
    }
});

videogamesRouter.post('/creategame', async (req, res) => {
    const { name, description, released, rating, platforms, genresIds } = req.body;
    try {
        if(!name || !description || !released || !rating || !platforms.length || !genresIds.length) return res.status(404).send('faltan datos');
        await createVideogame(name, description, released, rating, platforms, genresIds);
        res.status(200).send(true);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = videogamesRouter;