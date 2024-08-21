import React, { useState } from 'react';
// import './FlightBookingForm.css';

const FlightBookingForm = () => {
    const [formData, setFormData] = useState({
        startingPoint: '',
        destination: '',
        date: '',
    });

    const [flights, setFlights] = useState([]);
    const [selectedFlights, setSelectedFlights] = useState([]);

    const flightData = {
        "DELHI-LONDON": [
            { flight_number: "DL405", airline_name: "Delta Airlines", departure_time: "08:00 AM", arrival_time: "11:00 AM", price: 250 },
            { flight_number: "AA1001", airline_name: "American Airlines", departure_time: "09:00 AM", arrival_time: "12:00 PM", price: 230 },
            { flight_number: "UA802", airline_name: "United Airlines", departure_time: "10:00 AM", arrival_time: "01:00 PM", price: 240 },
            { flight_number: "B601", airline_name: "JetBlue", departure_time: "11:00 AM", arrival_time: "02:00 PM", price: 220 },
            { flight_number: "SW700", airline_name: "Southwest Airlines", departure_time: "12:00 PM", arrival_time: "03:00 PM", price: 210 },
        ],
        "MUMBAI-NEW YORK": [
            { flight_number: "DL304", airline_name: "Delta Airlines", departure_time: "06:00 AM", arrival_time: "07:30 AM", price: 120 },
            { flight_number: "AA205", airline_name: "American Airlines", departure_time: "07:00 AM", arrival_time: "08:30 AM", price: 115 },
            { flight_number: "UA709", airline_name: "United Airlines", departure_time: "08:00 AM", arrival_time: "09:30 AM", price: 125 },
            { flight_number: "B602", airline_name: "JetBlue", departure_time: "09:00 AM", arrival_time: "10:30 AM", price: 110 },
            { flight_number: "SW900", airline_name: "Southwest Airlines", departure_time: "10:00 AM", arrival_time: "11:30 AM", price: 105 },
        ],
        "CHENNAI-HYDERABAD": [
            { flight_number: "DL600", airline_name: "Delta Airlines", departure_time: "07:00 AM", arrival_time: "08:30 AM", price: 200 },
            { flight_number: "AA503", airline_name: "American Airlines", departure_time: "08:00 AM", arrival_time: "09:30 AM", price: 195 },
            { flight_number: "UA101", airline_name: "United Airlines", departure_time: "09:00 AM", arrival_time: "10:30 AM", price: 205 },
            { flight_number: "B701", airline_name: "JetBlue", departure_time: "10:00 AM", arrival_time: "11:30 AM", price: 190 },
            { flight_number: "SW402", airline_name: "Southwest Airlines", departure_time: "11:00 AM", arrival_time: "12:30 PM", price: 185 },
        ],
        "KOLKATA-TOKYO": [
            { flight_number: "DL305", airline_name: "Delta Airlines", departure_time: "08:00 AM", arrival_time: "10:00 AM", price: 180 },
            { flight_number: "AA702", airline_name: "American Airlines", departure_time: "09:00 AM", arrival_time: "11:00 AM", price: 175 },
            { flight_number: "UA904", airline_name: "United Airlines", departure_time: "10:00 AM", arrival_time: "12:00 PM", price: 185 },
            { flight_number: "B804", airline_name: "JetBlue", departure_time: "11:00 AM", arrival_time: "01:00 PM", price: 170 },
            { flight_number: "SW305", airline_name: "Southwest Airlines", departure_time: "12:00 PM", arrival_time: "02:00 PM", price: 165 },
        ],
        "DELHI-PARIS": [
            { flight_number: "DL789", airline_name: "Delta Airlines", departure_time: "07:00 AM", arrival_time: "10:00 AM", price: 210 },
            { flight_number: "AA1205", airline_name: "American Airlines", departure_time: "08:00 AM", arrival_time: "11:00 AM", price: 200 },
            { flight_number: "UA905", airline_name: "United Airlines", departure_time: "09:00 AM", arrival_time: "12:00 PM", price: 220 },
            { flight_number: "B906", airline_name: "JetBlue", departure_time: "10:00 AM", arrival_time: "01:00 PM", price: 195 },
            { flight_number: "SW507", airline_name: "Southwest Airlines", departure_time: "11:00 AM", arrival_time: "02:00 PM", price: 185 },
        ],
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const key = `${formData.startingPoint}-${formData.destination}`;
        if (flightData[key]) {
            setFlights(flightData[key]);
        } else {
            setFlights([]);
        }
    };

    const handleSelectFlight = (flight) => {
        setSelectedFlights((prevSelected) => {
            if (prevSelected.includes(flight)) {
                return prevSelected.filter(f => f !== flight);
            } else {
                return [...prevSelected, flight];
            }
        });
    };

    const totalAmount = selectedFlights.reduce((total, flight) => total + flight.price, 0);

    return (
        <div className="flight-booking-container">
            <form onSubmit={handleSubmit} className="flight-booking-form">
                <h2>✈️ Book Your Flight</h2>
                <p><strong>Note: Please fill the details in CAPITAL LETTERS only.</strong></p>
                <div>
                    <label htmlFor="startingPoint">Starting Point:</label>
                    <input
                        type="text"
                        id="startingPoint"
                        name="startingPoint"
                        placeholder="Starting Point"
                        value={formData.startingPoint}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="destination">Destination:</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Destination"
                        value={formData.destination}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Search Flights</button>
            </form>

            <div className="flight-results">
                {flights.length > 0 ? (
                    flights.map((flight, index) => (
                        <div key={index} className="flight-result-card">
                            <h3>{flight.flight_number} - {flight.airline_name}</h3>
                            <p>🛫 Departure: {flight.departure_time}</p>
                            <p>🛬 Arrival: {flight.arrival_time}</p>
                            <p>💸 Price: ${flight.price}</p>
                            <button
                                onClick={() => handleSelectFlight(flight)}
                                className={selectedFlights.includes(flight) ? 'selected' : ''}
                            >
                                {selectedFlights.includes(flight) ? 'Deselect' : 'Select'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-flights">No flights found for the selected route.</p>
                )}
            </div>
            {selectedFlights.length > 0 && (
                <div className="payment-section">
                    <h2>🧾 Payment Details</h2>
                    <p>Total Amount: ₹{totalAmount}</p>
                    <button>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default FlightBookingForm;
