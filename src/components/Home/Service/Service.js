import React, { useEffect, useState } from 'react';
import { faLaptop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
          setServices(data)
        })
    },[])
    return (
        <section className="services-container container mt-5 heading">
        <div className="text-center ">
            <h1 style={{color: '#242645'}}>Our Repair Services</h1>
            <span></span>
            <p className="text-secondary">Any kinds of digital device problem you need fixed. We can help! Check out our digital device repair services to find more information of what exactly we provide and if it suites your needs</p>
        </div>
        <div className="d-flex justify-content-center">
        <div className="  row mt-5 pt-5">
            {
                services.map(service => <ServiceDetail service={service} ></ServiceDetail>)
            }
        </div>
    </div>
    
    </section>
    );
};

export default Service;