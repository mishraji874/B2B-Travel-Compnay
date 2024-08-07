const express = require('express');
const router = express.Router();
const { getCabs } = require('./controllers/cabsController');

router.get('/cabs-search', getCabs);

module.exports = router;
