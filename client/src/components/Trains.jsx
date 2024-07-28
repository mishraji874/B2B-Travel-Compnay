import React from 'react';
import BookingForm from '../components/BookingForm';

const TrainsBooking = () => {
    return (
        <div className="booking-page trains-background">
            <BookingForm service="Trains" />
        </div>
    );
};

export default TrainsBooking;
