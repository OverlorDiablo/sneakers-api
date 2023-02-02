const path = require('path');
const fs = require('fs');
let cart = require('../db/cart.json');

const getCart = (req, res) => {
  return res.status(200).json(cart);
};

const addToCart = (req, res) => {
  const { body } = req;

  cart.push(body);
  fs.writeFileSync(path.join(__dirname, '../db/cart.json'), JSON.stringify(cart));

  return res.status(200).json(body);
};

const deleteFromCart = (req, res) => {
  const { id } = req.params;

  cart = cart.filter((item) => item.id !== Number(id));
  fs.writeFileSync(path.join(__dirname, '../db/cart.json'), JSON.stringify(cart));

  return res.status(200).send('OK');
};

const updateCart = (req, res) => {
  const { body } = req;

  cart.length = 0;
  fs.writeFileSync(path.join(__dirname, '../db/cart.json'), JSON.stringify(body));

  return res.status(200).send('OK');
};

module.exports = { getCart, addToCart, updateCart, deleteFromCart };
