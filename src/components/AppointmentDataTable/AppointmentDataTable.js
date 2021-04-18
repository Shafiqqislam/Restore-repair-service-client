import React from 'react';

const AppointmentDataTable = ({bookings}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Pay With</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  bookings.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.service.service}</td>
                        <td>Creadit Card</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;