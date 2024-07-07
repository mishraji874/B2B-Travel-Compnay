import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">B2B Travel</Link>
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login/Signup</Link>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </header>
    );
};

export default Header;
