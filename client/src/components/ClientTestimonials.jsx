import React from 'react';

const ClientTestimonials = () => {
    return (
        <section className="client-testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
                <div className="testimonial">
                    {/* <img src="image.jpg" alt="Client 1" /> */}
                    <p>"Amazing service! Highly recommend."</p>
                    <h4>John Doe, Company ABC</h4>
                </div>
                <div className="testimonial">
                    {/* <img src="image.jpg" alt="Client 2" /> */}
                    <p>"Exceptional support and great rates."</p>
                    <h4>Jane Smith, Company XYZ</h4>
                </div>
                <div className="testimonial">
                    {/* <img src="image.jpg" alt="Client 3" /> */}
                    <p>"Our go-to for all travel needs."</p>
                    <h4>Bob Johnson, Company 123</h4>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
