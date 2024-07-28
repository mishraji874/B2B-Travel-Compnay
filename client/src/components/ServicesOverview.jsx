import React from 'react';

const ServicesOverview = () => {
    return (
        <section className="services-overview">
            <h2>Our Services</h2>
            <p>Tailored travel solutions to meet your business needs.</p>
            <div className="service-cards">
                <div className="service-card">
                    <div className="icon-square"><a href='/services/flights'>✈️</a></div>
                    <h3>Flights</h3>
                    <p>Book and manage corporate flights with ease.</p>
                    <ul>
                        <li><b>Domestic</b>: Reliable domestic flight bookings.</li>
                        <li><b>International</b>: Seamless international travel arrangements.</li>
                    </ul>
                </div>
                <div className="service-card">
                    <div className="icon-square"><a href='/services/trains'>🚆</a></div>
                    <h3>Trains</h3>
                    <p>Reliable train bookings for your business travel.</p>
                </div>
                <div className="service-card">
                    <div className="icon-square"><a href='/services/buses'>🚌</a></div>
                    <h3>Buses</h3>
                    <p>Reliable bus bookings for your business travel.</p>
                </div>
                <div className="service-card">
                    <div className="icon-square"><a href='/services/cabs'>🚕</a></div>
                    <h3>Cabs</h3>
                    <p>On-demand cab services for your convenience.</p>
                </div>
                <div className="service-card">
                    <div className="icon-square"><a href='/services/hotels'>🏨</a></div>
                    <h3>Hotels</h3>
                    <p>Find and book the best accommodations.</p>
                    <ul>
                        <li><b>Domestic</b>: Top-rated domestic hotels.</li>
                        <li><b>International</b>: Premium international hotels.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;