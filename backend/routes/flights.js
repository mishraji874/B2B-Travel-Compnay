const express = require("express");
const axios = require("axios");
const router = express.Router();

// Define the API endpoint and key
const FLIGHT_API_URL =
    "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/nearest-places-matrix";
const API_KEY = "0dc5257e13mshfe35afeccd6d898p168962jsnc3f4bd2036";

// Route to search flights
router.post("/search", async (req, res) => {
    const { origin, destination, date } = req.body;

    try {
        const response = await axios.get(FLIGHT_API_URL, {
            params: {
                flexibility: 0,
                currency: "RUB",
                origin,
                destination,
                limit: 10,
                distance: 100,
            },
            headers: {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host":
                    "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching flight data:", error);
        res.status(500).json({ error: "Error fetching flight data" });
    }
});

module.exports = router;
