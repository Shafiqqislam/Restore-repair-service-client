import React from 'react';

const Testimonial = (props) => {
    const {description,name,from,imageURL} = props.review;
    return (
        <div className="card shadow-sm">
        <div className="card-body">
            <p className="text-secondary text-center">{description}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            <img className="mx-3" src={imageURL} alt="" width="60"/>
            <div>
                <h6 className="">{name}</h6>
                <p className="m-0 text-dark">{from}</p>
            </div>
        </div>
   </div>
    );
};

export default Testimonial;