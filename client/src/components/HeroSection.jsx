import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                {/* Background image/video here */}
            </div>
            <div className="hero-content">
                <h1>Seamless Travel Solutions for Your Business</h1>
                <p>Comprehensive services for flights, trains, buses, cabs, and hotels.</p>
                <div className="quick-search">
                    <input type="text" placeholder="From" />
                    <input type="text" placeholder="To" />
                    <input type="date" />
                    <button>Search</button>
                </div>
                <div className="cta-buttons">
                    <button className="btn">Explore Services</button>
                    <button className="btn">Get Started</button>
                </div>
            </div>
            <div className="chatbot">
                {/* Placeholder for chatbot */}
                <button className="chatbot-btn">Chat with us</button>
            </div>
        </section>
    );
};

export default HeroSection;
