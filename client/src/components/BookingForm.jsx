import React, { useState } from 'react';

const BookingForm = ({ service }) => {
    const [formData, setFormData] = useState({
        startingPoint: '',
        destination: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to fetch data based on form input
        console.log(`Fetching data for ${service}:`, formData);
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h2>Book {service}</h2>
            <div>
                <label htmlFor="startingPoint">Starting Point:</label>
                <input
                    type="text"
                    id="startingPoint"
                    name="startingPoint"
                    placeholder='Starting Point'
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
                    placeholder='Destination'
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
            <button type="submit">Search</button>
        </form>
    );
};

export default BookingForm;
