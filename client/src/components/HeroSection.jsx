import React from 'react';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    const goToServices = () => {
        navigate('/services');
    };

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
                    <button onClick={goToServices}>Search</button>
                </div>
                <div className="cta-buttons">
                    <button className="btn" onClick={goToServices}>Explore Services</button>
                    <button className="btn" onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}>Get Started</button>
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
