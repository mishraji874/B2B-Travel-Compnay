import React from "react";
import HeroSection from "./HeroSection";
import ServicesOverview from "./ServicesOverview";
import KeyFeatures from "./KeyFeatures";
import IndustriesServed from "./IndustriesServed";
import ClientTestimonials from "./ClientTestimonials";
import CallToAction from "./CallToAction";

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <ServicesOverview />
            <KeyFeatures />
            <IndustriesServed />
            <ClientTestimonials />
            <CallToAction />
        </div>
    )
}

export default Home;