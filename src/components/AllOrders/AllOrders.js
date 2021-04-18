import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Home/Dashboard/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: '1px solid red'
}

const AllOrders = () => {
    const [bookings, setBookings] = useState([]);
    console.log(bookings)
    const [loogedInUser, setLoogedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
 
    return (
        
       <div className="container-fluid row " >
            
               <Sidebar></Sidebar>
          
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Customers</h5>
               <AppointmentDataTable bookings={bookings}></AppointmentDataTable>
            </div>
        </div>
  
    );
};

export default AllOrders;