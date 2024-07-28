import React from 'react';

const Services = () => {
    return (
        <div className="services">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>Your one-stop solution for comprehensive travel management.</p>
            </header>
            <div className="service-details">
                <section>
                    <h2><a href='/services/flights'>Flights</a></h2>
                    <p>
                        Book and manage corporate flights with ease. Our flight booking services include both domestic and international travel arrangements to ensure your business trips are seamless and stress-free.
                    </p>
                    <ul>
                        <li><strong>Domestic:</strong> Reliable domestic flight bookings.</li>
                        <li><strong>International:</strong> Seamless international travel arrangements.</li>
                    </ul>
                </section>
                <section>
                    <h2><a href='/services/trains'>Trains</a></h2>
                    <p>
                        Reliable train bookings for your business travel. Our comprehensive train booking services ensure timely and comfortable travel for your corporate needs.
                    </p>
                </section>
                <section>
                    <h2><a href='/services/buses'>Buses</a></h2>
                    <p>
                        Convenient and flexible bus services to meet your business travel requirements. We offer a range of bus services to ensure comfortable and efficient travel.
                    </p>
                </section>
                <section>
                    <h2><a href='/services/cabs'>Cabs</a></h2>
                    <p>
                        On-demand cab services for your convenience. Our cab booking services provide quick and reliable transportation for your business needs.
                    </p>
                </section>
                <section>
                    <h2><a href='/services/hotels'>Hotels</a></h2>
                    <p>
                        Find and book the best accommodations for your business travel. We offer a wide selection of hotels to suit your preferences and budget.
                    </p>
                    <ul>
                        <li><strong>Domestic:</strong> Top-rated domestic hotels.</li>
                        <li><strong>International:</strong> Premium international hotels.</li>
                    </ul>
                </section>
            </div>
            <div className="why-b2b-portal">
                <h2>Why B2B Travel Booking Portal Is Best for Travel Agents?</h2>
                <div className="why-b2b-cards">
                    <div className="why-b2b-card">
                        <div className='icon-square'>💲</div>
                        <h3>Special Fare for Travel Agent</h3>
                        <p>Access exclusive fares designed specifically for travel agents.</p>
                    </div>
                    <div className="why-b2b-card">
                        <div className='icon-square'>💸</div>
                        <h3>Agent Commission</h3>
                        <p>Earn competitive commissions on every booking.</p>
                    </div>
                    <div className="why-b2b-card">
                        <div className='icon-square'>👨‍👦‍👦</div>
                        <h3>Team Expertise</h3>
                        <p>Benefit from our experienced team of travel experts.</p>
                    </div>
                    <div className="why-b2b-card">
                        <div className='icon-square'>🌍</div>
                        <h3>Global Presence</h3>
                        <p>Leverage our global network for seamless travel solutions.</p>
                    </div>
                    <div className="why-b2b-card">
                        <div className='icon-square'>☎️</div>
                        <h3>24*7 Booking Support</h3>
                        <p>Enjoy round-the-clock support for all your booking needs.</p>
                    </div>
                    <div className="why-b2b-card">
                        <div className='icon-square'>🤗</div>
                        <h3>Booking Reliability</h3>
                        <p>Experience reliable and hassle-free booking processes.</p>
                    </div>
                </div>
            </div>
            <div className="how-we-work">
                <h2>How We Work</h2>
                <p>
                    At B2B Travel Company, we aim to provide seamless and efficient travel management solutions tailored to your business needs. Our process involves:
                </p>
                <ol>
                    <li>
                        <strong>Consultation:</strong> Understanding your specific travel requirements through detailed consultations.
                    </li>
                    <li>
                        <strong>Customization:</strong> Designing customized travel solutions that align with your business goals.
                    </li>
                    <li>
                        <strong>Booking:</strong> Leveraging our extensive network to book flights, trains, buses, cabs, and hotels at competitive rates.
                    </li>
                    <li>
                        <strong>Management:</strong> Providing 24/7 support to manage your bookings and address any issues that may arise.
                    </li>
                    <li>
                        <strong>Review:</strong> Regularly reviewing and optimizing your travel plans to ensure cost-effectiveness and efficiency.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Services;
