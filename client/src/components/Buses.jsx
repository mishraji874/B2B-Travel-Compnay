import React from 'react';
import BusesSearch from '../components/BusesSearch';

const BusesBooking = () => {
    return (
        <div className="booking-page buses-background">
            <BusesSearch service="Buses" />
        </div>
    );
};

export default BusesBooking;
