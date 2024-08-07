const axios = require("axios");

const getFlights = async (req, res) => {
    const { origin, destination, date } = req.query;
    try {
        const response = await axios.get("https://your-flight-api.com/flights", {
            params: { origin, destination, date },
            headers: { "x-api-key": process.env.FLIGHT_API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching flight data:", error);
        res.status(500).json({ error: "Error fetching flight data" });
    }
};

module.exports = { getFlights };
