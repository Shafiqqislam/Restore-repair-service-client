import React from 'react';
import './BookingCard.css';

const BookingCard = ({ bookings }) => {
    return (
        <div>
            {
                bookings.map((appointment, index) =>
                    <div className="booking-card">
                        
                        <h3>{appointment.service.service}</h3>
                        <h4>{appointment.service.price}</h4>
                        <p className="text-secondary">{appointment.service.description}</p>
                        <h6>Date:{(new Date(appointment.orderDate).toDateString('dd/MM/yyyy'))}</h6>
                        <h6>Name:{appointment.name}</h6>
                    </div>
                )
            }
        </div>
    );
};

export default BookingCard;