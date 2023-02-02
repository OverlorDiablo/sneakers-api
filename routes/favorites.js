const router = require('express').Router();

const favoritesController = require('../controllers/favorites.controller');

router.get('/', favoritesController.getFavorites);
router.post('/', favoritesController.addToFavorites);
router.delete('/:id', favoritesController.removeFromFavorites);

module.exports = router;
