import React from 'react';

const Bookings = () => {
    // Example data
    const bookings = [
        {
            id: 1,
            date: '2023-07-21',
            service: 'Flight',
            details: 'NYC to LA',
            status: 'Completed'
        },
        {
            id: 2,
            date: '2023-08-10',
            service: 'Hotel',
            details: 'Hilton, New York',
            status: 'Upcoming'
        },
        {
            id: 2,
            date: '2023-08-10',
            service: 'Train',
            details: 'Kanpur to Chennai',
            status: 'Upcoming'
        },
        {
            id: 2,
            date: '2023-08-10',
            service: 'Cab',
            details: 'MM Nagar to Tambaram',
            status: 'Upcoming'
        },
        {
            id: 2,
            date: '2023-08-10',
            service: 'Bus',
            details: 'Tambaram to Pondicherry',
            status: 'Upcoming'
        }
    ];

    return (
        <div className="previous-bookings">
            <h1>Previous Bookings</h1>
            <div className="bookings-list">
                {bookings.map((booking) => (
                    <div key={booking.id} className="booking-card">
                        <p><strong>Date:</strong> {booking.date}</p>
                        <p><strong>Service:</strong> {booking.service}</p>
                        <p><strong>Details:</strong> {booking.details}</p>
                        <p><strong>Status:</strong> {booking.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookings;
