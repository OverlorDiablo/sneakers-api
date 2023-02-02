const router = require('express').Router();

const ordersController = require('../controllers/orders.controller');

router.get('/', ordersController.getOrders);
router.post('/', ordersController.addNewOrder);

module.exports = router;
