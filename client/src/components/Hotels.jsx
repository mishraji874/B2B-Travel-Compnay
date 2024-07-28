import React from 'react';
import BookingForm from '../components/BookingForm';

const HotelsBooking = () => {
    return (
        <div className="booking-page hotels-background">
            <BookingForm service="Hotels" />
        </div>
    );
};

export default HotelsBooking;
