import React from 'react';

const KeyFeatures = () => {
    return (
        <section className="key-features">
            <h2>Why Choose Us</h2>
            <div className="feature-blocks">
                <div className="feature-block">
                    <div className="icon-square">📞</div>
                    <h3>24/7 Support</h3>
                    <p>Around-the-clock customer support.</p>
                </div>
                <div className="feature-block">
                    <div className="icon-square">⏱️</div>
                    <h3>Real-Time Inventory</h3>
                    <p>Access to up-to-date availability and pricing.</p>
                </div>
                <div className="feature-block">
                    <div className="icon-square">💰</div>
                    <h3>Cost Efficiency</h3>
                    <p>Competitive rates and cost-saving options.</p>
                </div>
                <div className="feature-block">
                    <div className="icon-square">⚙️</div>
                    <h3>Customizable Solutions</h3>
                    <p>Tailored solutions to fit your business needs.</p>
                </div>
                <div className="feature-block">
                    <div className="icon-square">📱</div>
                    <h3>Mobile Access</h3>
                    <p>Manage bookings on the go.</p>
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
