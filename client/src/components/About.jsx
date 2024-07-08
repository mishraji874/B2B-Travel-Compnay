import React from 'react';

const About = () => {
    return (
        <div className="about-us">
            <div className="section">
                <h1>About Us</h1>

                {/* Our Services Include */}
                <section>
                    <h2>Our Services Include</h2>
                    <ul>
                        <li>Flight bookings - Domestic and International</li>
                        <li>Train reservations</li>
                        <li>Bus services</li>
                        <li>Cab bookings</li>
                        <li>Hotel accommodations - Domestic and International</li>
                    </ul>
                </section>

                {/* Who We Are? */}
                <section>
                    <h2>Who We Are?</h2>
                    <p>
                        B2B Travel Inc. is a trusted name in the travel industry, specializing in providing comprehensive travel solutions tailored for businesses.
                    </p>
                </section>

                {/* Our Strengths */}
                <section>
                    <h2>Our Strengths</h2>
                    <ul>
                        <li>Global network of partners ensuring seamless travel arrangements.</li>
                        <li>Advanced technology for real-time booking and management.</li>
                        <li>Dedicated customer support available 24/7.</li>
                        <li>Cost-effective solutions without compromising on quality.</li>
                    </ul>
                </section>

                {/* Our Core Values */}
                <section>
                    <h2>Our Core Values</h2>
                    <ul>
                        <li>Customer Satisfaction</li>
                        <li>Integrity and Transparency</li>
                        <li>Innovation and Excellence</li>
                        <li>Commitment to Service</li>
                    </ul>
                </section>

                {/* Additional Company Information */}
                <p>
                    Founded in 2024, B2B Travel Inc. has grown to become a leading provider of travel solutions, catering specifically to the needs of businesses worldwide.
                    For more information about our services or to discuss how we can assist your business, please <a href="/contact">contact us</a>.
                </p>
            </div>
        </div>
    );
};

export default About;
