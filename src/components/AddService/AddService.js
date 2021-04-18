import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Home/Dashboard/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: '1px solid red'
}

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            service: data.service,
            price: data.price,
            description: data.description,

        };
        const url = `http://localhost:5000/addService`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-4 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-12 col-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <form action="/addProduct" method="POST"> */}
                           Service Name: <input name="service" type="text" placeholder="Service title" ref={register} />
                        <br />
                           Price: <input type="text" name="price" placeholder="Enter Price" ref={register} />
                        <br />
                           Description: <input type="text" name="description" placeholder="Enter Description" ref={register} />
                        <br />
                        <input type="submit" />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddService;