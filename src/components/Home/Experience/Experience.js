import React from 'react';
import featured from '../../../images/feacher.jpg';
import './Experience.css';

const Experience = () => {
    return (
        <section  style={{backgroundColor:"#f8f9fa"}} className="features-service pb-0 pb-md-5 my-5 mt-5">
            <hr/>
            <div className="container mb-5 mt-5">
                <div className="row mb-6">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{height:'500px'}} className="img-fluid" src={featured} alt=""  />
                        <hr/>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h3> <span style={{ color: '#F69323', fontSize: '45px' }}>22</span>YEARS OF EXPERIENCE IN DIGITAL DEVICE REPAIR SERVICES</h3>
                        <p className="text-secondary my-5">
                            Restore is a U.S based computer repair service center. Basically we repair all major brands of PCs, Laptops, Smartphone, Tablet and Gaming console devices issues. We provide the services by well trained, skillful and friendly stuff. Our skill have been tested over the years.
                            We’re not only here to fix your device but also make sure you are informed and comfortable with the whole process. We’ll keep you updated and you feel comfortable with our services.
                        </p>
                        <h4>CALL US TO GET FREE QUOTES</h4>
                        <div style={{display:'flex'}} className="mt-5 ">
                            <button className="btn-contact1 mr-2"> 123-456-789</button>
                            <button className="btn-contact2"><span style={{color:'#F69323'}}>24/7</span> Mon - Fri</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;