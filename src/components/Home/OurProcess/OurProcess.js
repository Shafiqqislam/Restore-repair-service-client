import React from 'react';
import OurProcessDetail from '../OurProcessDetail/OurProcessDetail';
import './OurProcess.css';

const processData = [
    {   id:1,
        title: 'DAMAGE DEVICE',
        description: 'when your device is need to be fixed please no panic and relaxed',
        
        
    },
    {
        id:2,
        title: 'SEND THEM TO US',
        description: 'Send the device to us which you need to be fixed and stay calm',
       
    },
    {     
        id:3,
        title: 'FAST FIX',
        description: 'We will take care of it and work with it to fix it smooth and accurately',
      
       
    },
    {
        id:4,
        title: 'QUICK RETURN',
        description: 'After a quick fix, we just return it to your destination fast and securely',
       
    }
]
const OurProcess = () => {
    return (
        <section className="process-container  mt-3 pt-5 heading">
        <div className="text-center ">
            <h1 style={{color: '#FFFFFF'}}>Our Process</h1>
            <span></span>
            <p className="">Easy and effective way to get your device repaired</p>
        </div>
        <div className="d-flex justify-content-center container">
        <div className="   row mt-5 pt-5 pb-5">
            {
                processData.map(process => <OurProcessDetail process={process}></OurProcessDetail> )
            }
        </div>
    </div>
    
    </section>
    );
};

export default OurProcess;