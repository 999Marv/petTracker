const Pets = require('../db/models/Pets');

const addModels = (req, res, next) => {
  req.Pets = Pets;
  next();
};

module.exports = addModels;
