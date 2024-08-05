const API_URL = "http://localhost:5000/api/flights/search";

export const searchFlights = async (origin, destination, date) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ origin, destination, date }),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching flight data:", error);
        throw error;
    }
};
