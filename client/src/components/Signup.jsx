import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="login-signup-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Join Us</h1>
                    <p>Create an account to access our travel solutions.</p>
                </div>
            </div>
            <div className="form-section">
                <h2>Create Your Account</h2>
                <form>
                    <div className="form-group">
                        <label>Company Name:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Company Registration Number:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Company GST Number:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Company Address:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" required />
                    </div>
                    <div className="terms-conditions">
                        <input type="checkbox" id="termsConditions" required />
                        <label htmlFor="termsConditions">I agree to the Terms and Conditions</label>
                    </div>
                    <button type="submit" className="primary-btn">Sign Up</button>
                </form>
                <div className="existing-user-prompt">
                    <p>Already have an account?</p>
                    <Link to="/login" className="secondary-btn">Log In</Link>
                </div>
            </div>
            <div className="help-section">
                <p>Need help? <a href="/contact">Contact Support</a></p>
            </div>
        </div>
    );
};

export default Signup;
