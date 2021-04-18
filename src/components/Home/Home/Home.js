import React from 'react';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurProcess from '../OurProcess/OurProcess';
import Service from '../Service/Service';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Service></Service> 
           <Experience></Experience>
           <OurProcess></OurProcess>
           <Testimonials></Testimonials>
           <Team></Team>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;