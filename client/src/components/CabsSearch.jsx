import React, { useState } from 'react';

const CabBookingForm = () => {
    const [formData, setFormData] = useState({
        pickupLocation: '',
        dropLocation: '',
        date: '',
        time: '',
    });

    const [cabs, setCabs] = useState([]);
    const [selectedCabs, setSelectedCabs] = useState([]);

    const cabData = {
        "DELHI-CANAUGHT PLACE": [
            { cab_type: "Sedan", price: 300, estimated_time: "30 minutes" },
            { cab_type: "SUV", price: 500, estimated_time: "25 minutes" },
            { cab_type: "Luxury", price: 800, estimated_time: "20 minutes" },
            { cab_type: "Hatchback", price: 250, estimated_time: "35 minutes" },
            { cab_type: "Economy", price: 200, estimated_time: "40 minutes" },
        ],
        "TIRUSALAM-CHENNAI BEACH": [
            { cab_type: "Sedan", price: 400, estimated_time: "45 minutes" },
            { cab_type: "SUV", price: 600, estimated_time: "40 minutes" },
            { cab_type: "Luxury", price: 900, estimated_time: "35 minutes" },
            { cab_type: "Hatchback", price: 350, estimated_time: "50 minutes" },
            { cab_type: "Economy", price: 300, estimated_time: "55 minutes" },
        ],
        // Add more locations as necessary
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
        const key = `${formData.pickupLocation}-${formData.dropLocation}`;
        if (cabData[key]) {
            setCabs(cabData[key]);
        } else {
            setCabs([]);
        }
    };

    const handleSelectCabs = (cab) => {
        setSelectedCabs((prevSelected) => {
            if (prevSelected.includes(cab)) {
                return prevSelected.filter(f => f !== cab);
            } else {
                return [...prevSelected, cab];
            }
        });
    };

    const totalAmount = selectedCabs.reduce((total, cab) => total + cab.price, 0);

    return (
        <div className="cab-booking-container">
            <form onSubmit={handleSubmit} className="cab-booking-form">
                <h2>🚕 Book Your Cab</h2>
                <p><strong>Note: Please fill the details in CAPITAL LETTERS only.</strong></p>
                <div>
                    <label htmlFor="pickupLocation">Pickup Location:</label>
                    <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        placeholder="Pickup Location"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="dropLocation">Drop Location:</label>
                    <input
                        type="text"
                        id="dropLocation"
                        name="dropLocation"
                        placeholder="Drop Location"
                        value={formData.dropLocation}
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
                <div>
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Search Cabs</button>
            </form>

            <div className="cab-results">
                {cabs.length > 0 ? (
                    cabs.map((cab, index) => (
                        <div key={index} className="cab-result-card">
                            <h3>{cab.cab_type}</h3>
                            <p>💸 Price: ₹{cab.price}</p>
                            <p>⏳ Estimated Time: {cab.estimated_time}</p>
                            <button
                                onClick={() => handleSelectCabs(cab)}
                                className={selectedCabs.includes(cab) ? 'selected' : ''}
                            >
                                {selectedCabs.includes(cab) ? 'Deselect' : 'Select'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-cabs">No cabs found for the selected route.</p>
                )}
            </div>
            {selectedCabs.length > 0 && (
                <div className="payment-section">
                    <h2>🧾 Payment Details</h2>
                    <p>Total Amount: ₹{totalAmount}</p>
                    <button>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default CabBookingForm;
