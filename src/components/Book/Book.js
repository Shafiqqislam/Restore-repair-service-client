import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Home/Dashboard/Sidebar/Sidebar';
import ServiceDetail from '../Home/ServiceDetail/ServiceDetail';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useForm } from 'react-hook-form';
const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: '1px solid red',
    height: '100%',
}

const Book = () => {
    const { serviceId } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [loogedInUser, setLoogedInUser] = useContext(UserContext);
    const [shippingData,setShippingData]=useState(null);
    const [service, setService] = useState({});
    console.log(service)
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceId]);

  
  const onSubmit = data => {
   setShippingData(data);
  };
  const handlePaymentSuccess=paymentId=>{
    const orderdetails = {
       ...loogedInUser,
        shipment:shippingData,
        paymentId,
        service:service,
         orderDate: new Date()
         }
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderdetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('your order sucessfully')
        }
      })
  }
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-4 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 mt-5 mb-5 col-sm-12 col-12">
                    <div className="row">
                        <div  className="col-md-6">
                            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                <input name="name" defaultValue={loogedInUser.name} className="form-control" ref={register({ required: true })} placeholder="Your Name" />
                                {errors.name && <span className="error">Name is required</span>}
                                <input name="email" defaultValue={loogedInUser.email} className="form-control" ref={register({ required: true })} placeholder="Your Email" />
                                {errors.email && <span className="error">Email is required</span>}
                                <input name="service" defaultValue={service.service} className="form-control" ref={register({ required: true })} placeholder="Your Address" />
                                {errors.service && <span className="error">Address is required</span>}
                               <br/>
                                <input className="btn-brand" type="submit" />
                            </form>
                            <br/>
                            <h4>Pay With</h4>
                            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                            <p className="text-dark">Your service charged will be ${service.price}</p>
                        </div>
                        <div className="col-md-6">
                           
                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;