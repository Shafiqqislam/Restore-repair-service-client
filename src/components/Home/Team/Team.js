import React from 'react';
import Alexender from '../../../images/Alexender Gary.jpg';
import Mellissa from '../../../images/Mellissa Munoz.jpg';
import John from '../../../images/John Abraham.jpg';
import TeamDetail from '../TeamDetail/TeamDetail';

const teamData = [
    {
        
        name : 'Alexender Gary',
        position:'CEO & Founder',
        img : Alexender
    },
    {
       
        name : 'Mellissa Munoz',
        position:'Chief Engineer',
        img : Mellissa
    },
    {
       
        name : 'John Abraham',
        position:'Technical Manager',
        img : John
    },
]
const Team = () => {
    return (
        <section className="services-container container mt-5 heading">
        <div className="text-center ">
            <h1 style={{color: '#242645'}}>Our Awesome Team</h1>
            <span></span>
            <p className="text-dark">Meet with our qualified and expert team. We are specialized in our individual field. We have enough skill and tested. That’s why you’re getting the quality repair services.</p>
        </div>
        <div className="d-flex justify-content-center">
        <div className="  row mt-5 pt-5">
            {
                teamData.map(team => <TeamDetail team={team}></TeamDetail>)
            }
        </div>
    </div>
    
    </section>
    );
};

export default Team;