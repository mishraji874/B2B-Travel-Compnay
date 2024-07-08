import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Contact Us</h1>
                    <p>We are here to help you with your travel needs.</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" placeholder="Your Phone Number" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: support@b2btravel.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 B2B Travel St, Business City, BC 12345</p>
            </div>
        </div>
    );
};

export default Contact;
