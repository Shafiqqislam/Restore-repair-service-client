import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ServiceDetail.css';
import AppointmentForm from '../../Appointment/AppointmentForm/AppointmentForm';
import { useHistory } from 'react-router';

const ServiceDetail = (props) => {
    const {service,price,description,_id}=props.service;
    const history = useHistory([]);
    const handleClick=(serviceId)=>{
      history.push(`/book/${serviceId}`)
  }
    return (
        <div className="col-sm-2 col-sm-3 text-center card-info shadow-sm">
                <div className="mb-4">
                    <h6>{service}</h6>
                    <h2 style={{color:'#F69323'}}>{price}$</h2>
                    <p className="text-secondary">{description}</p>
                    <button onClick={()=>handleClick(_id)} className="btn-brand">CHECK THIS</button>
                </div>
                <hr/>
        </div>
    );
};

export default ServiceDetail;