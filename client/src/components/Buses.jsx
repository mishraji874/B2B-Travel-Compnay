import React from 'react';
import BookingForm from '../components/BookingForm';

const BusesBooking = () => {
    return (
        <div className="booking-page buses-background">
            <BookingForm service="Buses" />
        </div>
    );
};

export default BusesBooking;
