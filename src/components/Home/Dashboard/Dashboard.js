import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#100020",
    border: '1px solid red'
}

const Dashboard = () => {
    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-4 col-sm-6 col-12">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 col-sm-12 col-12">
                {/* <AppointmentsByDate appointments={appointments}></AppointmentsByDate> */}

            </div>
        </div>
    </section>
    );
};

export default Dashboard;