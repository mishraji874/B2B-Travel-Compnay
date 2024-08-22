import React, { useState } from 'react';

const TrainBookingForm = () => {
    const [formData, setFormData] = useState({
        startingPoint: '',
        destination: '',
        date: '',
    });

    const [trains, setTrains] = useState([]);
    const [selectedTrains, setSelectedTrains] = useState([]);

    const trainData = {
        "NEW DELHI-MUMBAI": [
            { train_number: "12301", train_name: "Rajdhani Express", departure_time: "04:30 PM", arrival_time: "08:35 AM", price: 1500 },
            { train_number: "12952", train_name: "Mumbai Rajdhani", departure_time: "05:30 PM", arrival_time: "09:45 AM", price: 1450 },
            { train_number: "12138", train_name: "Punjab Mail", departure_time: "05:15 PM", arrival_time: "08:20 AM", price: 1200 },
            { train_number: "22221", train_name: "Duronto Express", departure_time: "06:00 PM", arrival_time: "09:10 AM", price: 1600 },
            { train_number: "11077", train_name: "Jhelum Express", departure_time: "06:15 PM", arrival_time: "10:00 AM", price: 1300 },
        ],
        "DELHI-BANGLORE": [
            { train_number: "12650", train_name: "Karnataka Express", departure_time: "07:20 AM", arrival_time: "03:15 PM", price: 2000 },
            { train_number: "12214", train_name: "Yeshvantpur Sampark Kranti", departure_time: "08:40 AM", arrival_time: "04:20 PM", price: 1950 },
            { train_number: "12628", train_name: "Karnataka Sampark Kranti", departure_time: "09:30 AM", arrival_time: "05:45 PM", price: 2200 },
            { train_number: "12648", train_name: "Yeshvantpur Duronto", departure_time: "10:00 AM", arrival_time: "06:50 PM", price: 2150 },
            { train_number: "12686", train_name: "Chennai Express", departure_time: "11:30 AM", arrival_time: "07:40 PM", price: 1800 },
        ],
        "KOLKATA-CHENNAI": [
            { train_number: "12841", train_name: "Coromandel Express", departure_time: "08:45 AM", arrival_time: "04:00 PM", price: 1600 },
            { train_number: "12839", train_name: "Howrah Mail", departure_time: "09:15 AM", arrival_time: "04:50 PM", price: 1550 },
            { train_number: "12835", train_name: "Purulia Express", departure_time: "09:45 AM", arrival_time: "05:30 PM", price: 1750 },
            { train_number: "12660", train_name: "Ganga Kaveri Express", departure_time: "10:30 AM", arrival_time: "06:20 PM", price: 1800 },
            { train_number: "12623", train_name: "Trivandrum Mail", departure_time: "11:00 AM", arrival_time: "07:10 PM", price: 1650 },
        ],
        "HYDERABAD-BANGLORE": [
            { train_number: "12785", train_name: "SBC Double Deck", departure_time: "06:00 AM", arrival_time: "01:30 PM", price: 1400 },
            { train_number: "12701", train_name: "Sanghamitra Express", departure_time: "07:00 AM", arrival_time: "03:00 PM", price: 1350 },
            { train_number: "12786", train_name: "Kacheguda Express", departure_time: "08:00 AM", arrival_time: "04:00 PM", price: 1500 },
            { train_number: "12721", train_name: "Kongu Express", departure_time: "09:00 AM", arrival_time: "05:15 PM", price: 1550 },
            { train_number: "12785", train_name: "Shatabdi Express", departure_time: "10:00 AM", arrival_time: "06:00 PM", price: 1700 },
        ],
        "DELHI-KANPUR": [
            { train_number: "11057", train_name: "Amritsar Express", departure_time: "05:30 AM", arrival_time: "02:30 PM", price: 1800 },
            { train_number: "12264", train_name: "Duronto Express", departure_time: "06:00 AM", arrival_time: "03:00 PM", price: 1900 },
            { train_number: "11078", train_name: "Jhelum Express", departure_time: "07:00 AM", arrival_time: "04:00 PM", price: 2000 },
            { train_number: "12264", train_name: "Pune Duronto", departure_time: "08:00 AM", arrival_time: "05:00 PM", price: 2100 },
            { train_number: "11057", train_name: "Amritsar Express", departure_time: "09:00 AM", arrival_time: "06:00 PM", price: 2200 },
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
        if (trainData[key]) {
            setTrains(trainData[key]);
        } else {
            setTrains([]);
        }
    };

    const handleSelectTrains = (train) => {
        setSelectedTrains((prevSelected) => {
            if (prevSelected.includes(train)) {
                return prevSelected.filter(f => f !== train);
            } else {
                return [...prevSelected, train];
            }
        });
    };

    const totalAmount = selectedTrains.reduce((total, train) => total + train.price, 0);

    return (
        <div className="train-booking-container">
            <form onSubmit={handleSubmit} className="train-booking-form">
                <h2>🚂 Book Your Train</h2>
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
                <button type="submit">Search Trains</button>
            </form>

            <div className="train-results">
                {trains.length > 0 ? (
                    trains.map((train, index) => (
                        <div key={index} className="train-result-card">
                            <h3>{train.train_number} - {train.train_name}</h3>
                            <p>🚉 Departure: {train.departure_time}</p>
                            <p>🚉 Arrival: {train.arrival_time}</p>
                            <p>💸 Price: ₹{train.price}</p>
                            <button
                                onClick={() => handleSelectTrains(train)}
                                className={selectedTrains.includes(train) ? 'selected' : ''}
                            >
                                {selectedTrains.includes(train) ? 'Deselect' : 'Select'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-trains">No trains found for the selected route.</p>
                )}
            </div>
            {selectedTrains.length > 0 && (
                <div className="payment-section">
                    <h2>🧾 Payment Details</h2>
                    <p>Total Amount: ₹{totalAmount}</p>
                    <button>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default TrainBookingForm;
