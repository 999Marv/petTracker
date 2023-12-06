const express = require('express');
const addModels = require('./middleware/add-models');
const controllers = require('./controllers');

const router = express.Router();

router.use(addModels);

router.post('/pets', controllers.create); // create Pet
router.get('/pets', controllers.list); // list all pets
router.delete('/pets:id', controllers.remove); // remove a pet

module.exports = router;
