const { Router } = require('express');
const { getGenresDB } = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const genresDB = await getGenresDB();
        res.status(200).send(genresDB);
    } catch (error) {
        res.status(404).send({error: error.message});
    }
});

module.exports = router;

