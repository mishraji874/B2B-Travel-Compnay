const express = require('express');
const router = express.Router();
const { getFlights } = require('./controllers/flightsController');

router.get('/flights-search', getFlights);

module.exports = router;