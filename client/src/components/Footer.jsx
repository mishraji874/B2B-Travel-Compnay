import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send email to a mailing list)
        setEmail('');
        alert('Thank you for subscribing!');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="quick-links">
                    {/* Add your quick links here */}
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    {/* Add more links as needed */}
                </div>
                <div className="social-media">
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="newsletter">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                {/* <div className="copyright">
                    <p>&copy; 2024 B2B Travel Inc. All Rights Reserved.</p>
                </div> */}
            </div>
            <div className="copyright">
                    <p>&copy; 2024 B2B Travel Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
