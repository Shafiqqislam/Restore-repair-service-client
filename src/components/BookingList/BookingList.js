import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookingCard from '../BookingCard/BookingCard';
import Sidebar from '../Home/Dashboard/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: '1px solid red'
}
const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    console.log(bookings)
    const [loogedInUser, setLoogedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-4 col-sm-6 col-12">
                  <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <h2>Service List</h2>
                  <BookingCard bookings={bookings}></BookingCard>
                </div>
            </div>
        </section>
    );
};

export default BookingList;