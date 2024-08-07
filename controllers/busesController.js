const axios = require('axios');

const getBuses = async (req, res) => {
    const { origin, destination, date } = req.query;
    try {
        const response = await axios.get('https://your-bus-api.com/buses', {
            params: { origin, destination, date },
            headers: { 'x-api-key': process.env.BUS_API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching bus data:', error);
        res.status(500).json({ error: 'Error fetching bus data' });
    }
};

module.exports = { getBuses };
