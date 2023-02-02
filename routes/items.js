const router = require('express').Router();

const itemsController = require('../controllers/items.controller');

router.get('/', itemsController.getItems);

module.exports = router;
