import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, db, doc, getDoc } from '../firebase';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Fetch user data from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                localStorage.setItem('user', JSON.stringify({ uid: user.uid, ...userData })); // Store user data in local storage
            }
            navigate('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

return (
    <div className="login-signup-page">
        <div className="hero-section">
            <div className="hero-content">
                <h1>Welcome Back</h1>
                <p>Log in to manage your travel solutions.</p>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
        <div className="form-section">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
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
