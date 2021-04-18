import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <div class="container">
        <nav className="navbar menu navbar-expand-lg  black navbar-light">
               <Link className="nav-link mr-5" to="/"><img style={{height:"50px"}} src={logo} alt=""/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    <Link className="nav-link mr-5" to="/">Home</Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 " to="/dashboard">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 " to="#">Testimonial</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 " to="#">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 btn-brand" to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
</div>
    );
};

export default Navbar;