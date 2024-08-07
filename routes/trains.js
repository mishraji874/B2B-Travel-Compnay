const express = require('express');
const router = express.Router();
const { getTrains } = require('./controllers/trainsController');

router.get('/train-search', getTrains);

module.exports = router;
