import React from 'react';

const IndustriesServed = () => {
    return (
        <section className="industries-served">
            <h2>Industries We Serve</h2>
            <div className="industries-grid">
                <div className="industry feature-block">
                    <div className='icon-square'>✈️</div>
                    <h3>Travel Agencies</h3>
                    <p>Travel agencies specialize in providing comprehensive travel planning and booking services for individuals and groups. They facilitate arrangements for flights, accommodations, tours, and other travel-related services.</p>
                </div>
                <div className="industry feature-block">
                    <div className='icon-square'>🏬</div>
                    <h3>Corporations</h3>
                    <p>Corporations require tailored travel solutions for business purposes, including corporate travel management, event planning, and employee accommodations. They seek efficient and cost-effective travel arrangements.</p>
                </div>
                <div className="industry feature-block">
                    <div className='icon-square'>🧳</div>
                    <h3>Tour Operators</h3>
                    <p>Tour operators organize and manage travel packages and experiences for tourists and travelers. They curate itineraries, handle logistics, and provide guided tours to popular destinations worldwide.</p>
                </div>
                <div className="industry feature-block">
                    <div className='icon-square'>🌎</div>
                    <h3>Online Travel Agencies (OTAs)</h3>
                    <p>OTAs are digital platforms that enable users to search, compare, and book travel services online. They offer convenience, competitive pricing, and a wide range of options for flights, hotels, car rentals, and vacation packages.</p>
                </div>
                <div className="industry feature-block">
                    <div className='icon-square'>📦</div>
                    <h3>Wholesalers</h3>
                    <p>Travel wholesalers purchase travel products in bulk from suppliers and distribute them to retail travel agencies or other buyers at discounted rates. They play a crucial role in the distribution and availability of travel inventory.</p>
                </div>
            </div>
        </section>
    );
};

export default IndustriesServed;
