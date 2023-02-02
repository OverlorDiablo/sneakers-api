const router = require('express').Router();

const items = require('./items');
const cart = require('./cart');
const favorites = require('./favorites');
const orders = require('./orders');

router.use('/items', items);
router.use('/cart', cart);
router.use('/favorites', favorites);
router.use('/orders', orders);

module.exports = router;
