const path = require('path');
const fs = require('fs');
const orders = require('../db/orders.json');

const getOrders = (req, res) => {
  return res.json(orders);
};

const addNewOrder = (req, res) => {
  const { body } = req;

  orders.push(body);
  fs.writeFileSync(path.join(__dirname, '../db/orders.json'), JSON.stringify(orders));

  return res.status(200).json(body);
};

module.exports = { getOrders, addNewOrder };
