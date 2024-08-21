import React from 'react';
import HotelsSearch from '../components/HotelsSearch';

const HotelsBooking = () => {
    return (
        <div className="booking-page hotels-background">
            <HotelsSearch service="Hotels" />
        </div>
    );
};

export default HotelsBooking;
