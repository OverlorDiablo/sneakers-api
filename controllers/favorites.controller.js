const path = require('path');
const fs = require('fs');
let favorites = require('../db/favorites.json');

const getFavorites = (req, res) => {
  return res.json(favorites);
};

const addToFavorites = (req, res) => {
  const { body } = req;

  favorites.push(body);
  fs.writeFileSync(path.join(__dirname, '../db/favorites.json'), JSON.stringify(favorites));

  res.status(200).json(body);
};

const removeFromFavorites = (req, res) => {
  const { id } = req.params;

  favorites = favorites.filter((item) => item.id !== Number(id));
  fs.writeFileSync(path.join(__dirname, '../db/favorites.json'), JSON.stringify(favorites));

  return res.status(200).send('OK');
};

module.exports = { getFavorites, addToFavorites, removeFromFavorites };
