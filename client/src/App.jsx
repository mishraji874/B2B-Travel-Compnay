import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import KeyFeatures from './components/KeyFeatures';
import IndustriesServed from './components/IndustriesServed';
import ClientTestimonials from './components/ClientTestimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <ServicesOverview />
        <KeyFeatures />
        <IndustriesServed />
        <ClientTestimonials />
        <CallToAction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
