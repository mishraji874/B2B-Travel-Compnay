import React, { useState } from 'react';

const BusBookingForm = () => {
    const [formData, setFormData] = useState({
        startingPoint: '',
        destination: '',
        date: '',
    });

    const [buses, setBuses] = useState([]);
    const [selectedBuses, setSelectedBuses] = useState([]);

    const busData = {
        "DELHI-JAIPUR": [
            { bus_number: "DL201", bus_name: "Rajasthan State Bus", departure_time: "07:00 AM", arrival_time: "12:00 PM", price: 450 },
            { bus_number: "DL202", bus_name: "Volvo AC Bus", departure_time: "09:00 AM", arrival_time: "02:00 PM", price: 650 },
            { bus_number: "DL203", bus_name: "Luxury Sleeper Bus", departure_time: "10:00 AM", arrival_time: "03:00 PM", price: 750 },
            { bus_number: "DL204", bus_name: "Semi-Sleeper AC Bus", departure_time: "11:00 AM", arrival_time: "04:00 PM", price: 550 },
            { bus_number: "DL205", bus_name: "Non-AC Sleeper Bus", departure_time: "12:00 PM", arrival_time: "05:00 PM", price: 400 },
        ],
        "BANGLORE-MUMBAI": [
            { bus_number: "BL101", bus_name: "Karnataka State Bus", departure_time: "08:00 AM", arrival_time: "02:00 PM", price: 500 },
            { bus_number: "BL102", bus_name: "Volvo AC Bus", departure_time: "09:30 AM", arrival_time: "03:30 PM", price: 700 },
            { bus_number: "BL103", bus_name: "Luxury Sleeper Bus", departure_time: "10:00 AM", arrival_time: "04:00 PM", price: 800 },
            { bus_number: "BL104", bus_name: "Semi-Sleeper AC Bus", departure_time: "11:00 AM", arrival_time: "05:00 PM", price: 600 },
            { bus_number: "BL105", bus_name: "Non-AC Sleeper Bus", departure_time: "12:00 PM", arrival_time: "06:00 PM", price: 450 },
        ],
        // Add more source-destination pairs as necessary
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
        if (busData[key]) {
            setBuses(busData[key]);
        } else {
            setBuses([]);
        }
    };

    const handleSelectBuses = (bus) => {
        setSelectedBuses((prevSelected) => {
            if (prevSelected.includes(bus)) {
                return prevSelected.filter(f => f !== bus);
            } else {
                return [...prevSelected, bus];
            }
        });
    };

    const totalAmount = selectedBuses.reduce((total, bus) => total + bus.price, 0);

    return (
        <div className="bus-booking-container">
            <form onSubmit={handleSubmit} className="bus-booking-form">
                <h2>🚌 Book Your Bus</h2>
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
                <button type="submit">Search Buses</button>
            </form>

            <div className="bus-results">
                {buses.length > 0 ? (
                    buses.map((bus, index) => (
                        <div key={index} className="bus-result-card">
                            <h3>{bus.bus_number} - {bus.bus_name}</h3>
                            <p>🚌 Departure: {bus.departure_time}</p>
                            <p>🚌 Arrival: {bus.arrival_time}</p>
                            <p>💸 Price: ₹{bus.price}</p>
                            <button
                                onClick={() => handleSelectBuses(bus)}
                                className={selectedBuses.includes(bus) ? 'selected' : ''}
                            >
                                {selectedBuses.includes(buses) ? 'Deselect' : 'Select'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-buses">No buses found for the selected route.</p>
                )}
            </div>
            {selectedBuses.length > 0 && (
                <div className="payment-section">
                    <h2>🧾 Payment Details</h2>
                    <p>Total Amount: ₹{totalAmount}</p>
                    <button>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default BusBookingForm;
