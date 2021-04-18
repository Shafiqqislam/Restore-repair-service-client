import React from 'react';
import './OurProcessdetail.css';

const OurProcessDetail = ({process}) => {
    return (
        <div className="col-md-3 our-process">
           <div style={{display:'flex'}}>
               <h3 className="number-process">{process.id}</h3>
               <h4 className="title-process">{process.title}</h4>
           </div>
           <p>{process.description}</p>
        </div>
    );
};

export default OurProcessDetail;