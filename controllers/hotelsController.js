const axios = require('axios');

const getHotels = async (req, res) => {
    const { location, date } = req.query;
    try {
        const response = await axios.get('https://your-hotel-api.com/hotels', {
            params: { location, date },
            headers: { 'x-api-key': process.env.HOTEL_API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching hotel data:', error);
        res.status(500).json({ error: 'Error fetching hotel data' });
    }
};

module.exports = { getHotels };
