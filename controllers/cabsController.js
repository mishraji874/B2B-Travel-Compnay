const axios = require('axios');

const getCabs = async (req, res) => {
    const { origin, destination, date } = req.query;
    try {
        const response = await axios.get('https://your-cab-api.com/cabs', {
            params: { origin, destination, date },
            headers: { 'x-api-key': process.env.CAB_API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching cab data:', error);
        res.status(500).json({ error: 'Error fetching cab data' });
    }
};

module.exports = { getCabs };
