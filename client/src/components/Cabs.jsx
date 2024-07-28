import React from 'react';
import BookingForm from '../components/BookingForm';

const CabsBooking = () => {
    return (
        <div className="booking-page cabs-background">
            <BookingForm service="Cabs" />
        </div>
    );
};

export default CabsBooking;
