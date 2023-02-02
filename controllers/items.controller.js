const items = require('../db/items.json');

const getItems = (req, res) => {
  return res.json(items);
};

module.exports = { getItems };
