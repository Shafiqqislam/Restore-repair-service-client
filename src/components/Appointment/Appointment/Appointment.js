import React from 'react';
import Navbar from '../../Navbar/Navbar';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    return (
        <div>
           <Navbar></Navbar>
           <BookAppointment></BookAppointment>
        </div>
    );
};

export default Appointment;