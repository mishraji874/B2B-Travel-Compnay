import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-signup-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome Back</h1>
                    <p>Log in to manage your travel solutions.</p>
                </div>
            </div>
            <div className="form-section">
                <h2>Login to Your Account</h2>
                <form>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" required />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit" className="primary-btn">Log In</button>
                    <Link to="/forgot-password" className="forgot-password-link">Forgot your password?</Link>
                </form>
                <div className="new-user-prompt">
                    <p>New to B2B Travel?</p>
                    <Link to="/signup" className="secondary-btn">Create an Account</Link>
                </div>
            </div>
            <div className="help-section">
                <p>Need help? <a href="/contact">Contact Support</a></p>
            </div>
        </div>
    );
};

export default Login;
