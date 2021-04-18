import React from 'react';
import { Link } from 'react-router-dom';
import computer from '../../../images/cover.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#242645'}}>Fast Repair Service<br/> Starts Here</h1>
                <p className="text-secondary">Just send your valuable Laptop,PC,Mobile Gaming device or smartphone and well's take care of it</p>
                <Link to="/appointment" className="btn btn-brand">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={computer} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;