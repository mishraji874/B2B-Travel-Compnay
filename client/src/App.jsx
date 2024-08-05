import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import Resources from './components/Resources';
import Services from "./components/Services";
import Flights from "./components/Flights";
import Trains from "./components/Trains";
import Buses from "./components/Buses";
import Hotels from "./components/Hotels";
import Cabs from "./components/Cabs";
import Dashboard from "./components/Dashboard";
import './App.css';
import ProfileSettings from './components/ProfileSettings';
import Bookings from './components/Bookings';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/flights" element={<Flights />} />
          <Route path="/services/trains" element={<Trains />} />
          <Route path="/services/buses" element={<Buses />} />
          <Route path="/services/hotels" element={<Hotels />} />
          <Route path="/services/cabs" element={<Cabs />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
