import React, { useState } from 'react';
// import './HotelBookingForm.css';

const HotelBookingForm = () => {
    const [formData, setFormData] = useState({
        destination: '',
        checkInDate: '',
        checkOutDate: '',
    });

    const [hotels, setHotels] = useState([]);
    const [selectedHotels, setSelectedHotels] = useState([]);

    const hotelData = {
        "DELHI": [
            { hotel_name: "The Leela Palace", location: "Chanakyapuri, Delhi", check_in: "12:00 PM", check_out: "11:00 AM", price: 7000 },
            { hotel_name: "Taj Mahal Hotel", location: "Agra", check_in: "12:00 PM", check_out: "11:00 AM", price: 6500 },
            { hotel_name: "ITC Maurya", location: "Diplomatic Enclave, Delhi", check_in: "12:00 PM", check_out: "11:00 AM", price: 6000 },
            { hotel_name: "Shangri-La", location: "Connaught Place, Delhi", check_in: "12:00 PM", check_out: "11:00 AM", price: 5500 },
            { hotel_name: "The Oberoi", location: "New Delhi", check_in: "12:00 PM", check_out: "11:00 AM", price: 7500 },
        ],
        "MUMBAI": [
            { hotel_name: "The Taj Mahal Palace", location: "Colaba, Mumbai", check_in: "12:00 PM", check_out: "11:00 AM", price: 5000 },
            { hotel_name: "JW Marriott", location: "Juhu, Mumbai", check_in: "12:00 PM", check_out: "11:00 AM", price: 4500 },
            { hotel_name: "The Oberoi", location: "Nariman Point, Mumbai", check_in: "12:00 PM", check_out: "11:00 AM", price: 5500 },
            { hotel_name: "Trident", location: "Bandra Kurla Complex, Mumbai", check_in: "12:00 PM", check_out: "11:00 AM", price: 4000 },
            { hotel_name: "ITC Grand Central", location: "Parel, Mumbai", check_in: "12:00 PM", check_out: "11:00 AM", price: 4800 },
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
        const key = formData.destination;
        if (hotelData[key]) {
            setHotels(hotelData[key]);
        } else {
            setHotels([]);
        }
    };

    const handleSelectHotels = (hotel) => {
        setSelectedHotels((prevSelected) => {
            if (prevSelected.includes(hotel)) {
                return prevSelected.filter(f => f !== hotel);
            } else {
                return [...prevSelected, hotel];
            }
        });
    };

    const totalAmount = selectedHotels.reduce((total, hotel) => total + hotel.price, 0);

    return (
        <div className="hotel-booking-container">
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <h2>🏨 Book Your Hotel</h2>
                <p><strong>Note: Please fill the details in CAPITAL LETTERS only.</strong></p>
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
                    <label htmlFor="checkInDate">Check-In Date:</label>
                    <input
                        type="date"
                        id="checkInDate"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="checkOutDate">Check-Out Date:</label>
                    <input
                        type="date"
                        id="checkOutDate"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Search Hotels</button>
            </form>

            <div className="hotel-results">
                {hotels.length > 0 ? (
                    hotels.map((hotel, index) => (
                        <div key={index} className="hotel-result-card">
                            <h3>{hotel.hotel_name}</h3>
                            <p>📍 Location: {hotel.location}</p>
                            <p>🕒 Check-In: {hotel.check_in}</p>
                            <p>🕔 Check-Out: {hotel.check_out}</p>
                            <p>💸 Price: ₹{hotel.price}</p>
                            <button
                                onClick={() => handleSelectHotels(hotel)}
                                className={selectedHotels.includes(hotel) ? 'selected' : ''}
                            >
                                {selectedHotels.includes(hotel) ? 'Deselect' : 'Select'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-hotels">No hotels found for the selected destination.</p>
                )}
            </div>
            {selectedHotels.length > 0 && (
                <div className="payment-section">
                    <h2>🧾 Payment Details</h2>
                    <p>Total Amount: ₹{totalAmount}</p>
                    <button>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default HotelBookingForm;
