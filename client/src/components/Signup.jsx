import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyRegNumber, setCompanyRegNumber] = useState('');
    const [companyGSTNumber, setCompanyGSTNumber] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [error, setError] = useState("");
    const [companyPhone, setCompanyPhone] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                email,
                password,
                companyName,
                companyRegNumber,
                companyGSTNumber,
                companyAddress
            });

            localStorage.setItem('user', JSON.stringify({ uid: user.uid, companyName, companyRegNumber, companyGSTNumber, companyAddress, email, password, companyPhone }));

            navigate('/dashboard');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="login-signup-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Join Us</h1>
                    <p>Create an account to access our travel solutions.</p>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
            <div className="form-section">
                <h2>Create Your Account</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label>Company Name:</label>
                        <input type="text" name="companyName" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Company Registration Number:</label>
                        <input type="text" name="companyRegNumber" placeholder="Company Registration Number" value={companyRegNumber} onChange={(e) => setCompanyRegNumber(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Company GST Number:</label>
                        <input type="text" name="companyGSTNumber" placeholder="Company GST Number" value={companyGSTNumber} onChange={(e) => setCompanyGSTNumber(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Company Address:</label>
                        <input type="text" name="companyAddress" placeholder="Company Address" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="text" name="companyPhone" placeholder="Company Phone" value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
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
