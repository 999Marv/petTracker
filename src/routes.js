const express = require('express');
const addModels = require('./middleware/add-models');

const router = express.Router();

router.use(addModels);
