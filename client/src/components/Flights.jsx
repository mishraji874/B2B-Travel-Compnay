import React from 'react';
import BookingForm from '../components/BookingForm';

const FlightsBooking = () => {
    return (
        <div className="booking-page flights-background">
            <BookingForm service="Flights" />
        </div>
    );
};

export default FlightsBooking;
