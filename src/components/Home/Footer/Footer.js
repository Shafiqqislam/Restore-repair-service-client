import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const noNamed = [
        {name: "Restore is a U.S based computer repair service center. Basically we repair all major brands of PCs, Laptops, Smartphone, Tablet, Flash Drive and Gaming Console devices issues." , link: "/emergency"},
    ]
    const Newsletter = [
        {name: "Signup for regular newsletter and stay upto date with our latest news" , link: "//google.com/map"},
       
    ]
    const Services = [
        {name: "Laptop Repair" , link: "/emergency"},
        {name: "iPhone Repair" , link: "/checkup"},
        {name: "iPad Repair" , link: "/personal-treatment"},
        {name: "Tablet Repair" , link: "/tooth-extract"},
        {name: "Smartphone Repair" , link: "/checkup"},
        {name: "Gadget Repair" , link: "/checkup"},
        {name: "Recover Data" , link: "/checkup"}
    ]
    const ShopInfo = [
        {name: "Address : 965 East Avenu, Sector 9 Russel Squire, UK" , link: "/emergency"},
        {name: "Phone : (+1)755-650-5212" , link: "/checkup"},
        {name: "Email : info@codeecstasy.com" , link: "/personal-treatment"},
        {name: "Hours: Mon - Fri (9am - 6pm)" , link: "/tooth-extract"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Restore repair service" menuItems={noNamed}/>
                    <hr/>
                    <FooterCol key={2} menuTitle="Shop Info" menuItems={ShopInfo}/>
                    <FooterCol key={3} menuTitle="Services" menuItems={Services}/>
                    <FooterCol key={4} menuTitle="Newsletter" menuItems={Newsletter}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div style={{display:'flex'}} className="mt-5">
                              <input placeholder="email address" type="text" value=""/>
                             <button className="btn-newslater"><FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="text-dark">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;