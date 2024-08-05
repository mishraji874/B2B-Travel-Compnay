const express = require('express');
const axios = require('axios');
const db = require('../server');
const router = express.Router();

router.get('/search', async (req, res) => {
    const { from, to, date } = req.query;
    try {
        const response = await axios.get(`https://api.example.com/flights`, {
            params: {
                from,
                to,
                date,
                apiKey: process.env.TRAINS_API_KEY,
            },
        });
        const flightsData = response.data;
        // Store in Firestore
        await db.collection('flights').add(flightsData);
        res.json(flightsData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
