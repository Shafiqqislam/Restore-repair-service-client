import React from 'react';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const TeamDetail = (props) => {
    const { name, img, position } = props.team;
    return (
        <div className="col-sm-4 team show-gallary text-center">
            <div className="">
                <img className="mx-3 img-fluid" src={img} alt="" />
                <div class="item-logo">
                    <ul>
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon " icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                </div>
                <div className="team-detail">
                    <h6 className="">{name}</h6>
                    <p className="text-dark">{position}</p>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;