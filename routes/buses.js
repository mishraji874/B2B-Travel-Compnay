const express = require('express');
const router = express.Router();
const { getBuses } = require('./controllers/busesController');

router.get('/bus-search', getBuses);

module.exports = router;
