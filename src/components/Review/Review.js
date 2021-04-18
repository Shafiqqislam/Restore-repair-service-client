import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Home/Dashboard/Sidebar/Sidebar';
import axios from 'axios';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: '1px solid red'
}

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            from: data.from,
            description: data.description,
            imageURL: imageURL

        };
        const url = `http://localhost:5000/addReview`;
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
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'fe4f0a54c94630bdf74bd24a4d996c7a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-4 col-sm-6 col-12">
               <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <form action="/addProduct" method="POST"> */}
                    <input name="name" type="text" className="form-control" placeholder="Enter Name" ref={register} />
                    <br />
                   <input type="text" name="from" className="form-control" placeholder="From" ref={register} />
                    <br />
                    <input type="text" name="description" className="form-control" placeholder="Enter Description" ref={register} />
                    <br />
                    Add Photo: <input name="exampleRequired" type="file" onChange={handleImageUpload}  />
                    <br/>
                    <input className="btn btn-primary" type="submit" />
                </form>

            </div>
        </div>
    </section>
    );
};

export default Review;