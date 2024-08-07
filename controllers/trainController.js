const axios = require('axios');

const getTrains = async (req, res) => {
    const { origin, destination, date } = req.query;
    try {
        const response = await axios.get('https://your-train-api.com/trains', {
            params: { origin, destination, date },
            headers: { 'x-api-key': process.env.TRAIN_API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching train data:', error);
        res.status(500).json({ error: 'Error fetching train data' });
    }
};

module.exports = { getTrains };
