import React, { useState } from 'react';
// import './FAQ.css';

const FAQ = () => {
    // State to manage which question is currently expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    // FAQ data with questions and answers
    const faqData = [
        {
            question: "How do I book flights for my business?",
            answer: "You can book flights for your business through our easy-to-use online platform. Simply log in, search for flights, select your options, and proceed to booking."
        },
        {
            question: "What kind of support do you offer?",
            answer: "We provide 24/7 customer support to assist you with any travel-related queries or issues. Our team is dedicated to ensuring a seamless travel experience for your business."
        },
        {
            question: "Can I manage multiple bookings at once?",
            answer: "Yes, our platform allows you to manage multiple bookings simultaneously. You can view, modify, and cancel bookings as needed, all in one place."
        },
        {
            question: "Do you offer discounts for bulk bookings?",
            answer: "Yes, we offer competitive rates and discounts for bulk bookings. Contact our sales team to discuss your specific requirements and get a personalized quote."
        },
        {
            question: "How can I integrate your services with my existing systems?",
            answer: "We provide API integrations and custom solutions to seamlessly integrate our travel services with your existing systems. Contact us to learn more about our integration options."
        }
    ];

    // Function to toggle the answer visibility
    const toggleAnswer = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); // Collapse the answer if already expanded
        } else {
            setExpandedIndex(index); // Expand the answer
        }
    };

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {faqData.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <div className="question" onClick={() => toggleAnswer(index)}>
                        <h3>Question: {faq.question}</h3>
                        <span className={`toggle-icon ${expandedIndex === index ? 'open' : ''}`}></span>
                    </div>
                    <div className={`answer ${expandedIndex === index ? 'active' : ''}`}>
                        <p>Answer: {faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
