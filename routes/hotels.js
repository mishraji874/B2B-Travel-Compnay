// travel-api/server/routes/hotels.js

const express = require('express');
const router = express.Router();
const { getHotels } = require('./controllers/hotelsController');

router.get('/hotel-search', getHotels);

module.exports = router;
