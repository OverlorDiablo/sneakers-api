const router = require('express').Router();

const cartController = require('../controllers/cart.controller');

router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
router.delete('/:id', cartController.deleteFromCart);
router.put('/', cartController.updateCart);

module.exports = router;
