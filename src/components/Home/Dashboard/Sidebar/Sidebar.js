import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css';

const Sidebar = () => {
    // const [isDoctor, setIsDoctor] = useState(false);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book" className="text-white">
                    <FontAwesomeIcon icon={faUserPlus} /><span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="bookinglist" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                    </Link>
                </li>
              
                    <li>
                        <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} />  <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allorders" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addservice" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageservice" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                        </Link>
                    </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;