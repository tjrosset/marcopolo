import React from 'react';
import {Container} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

import '../styles/contact.css'

function Footer(){
    return(
        <div className='footer-container'>
            <Container className='cspace'>
                    <div className='information-container'>
                        <li className ='info-item'>Marco Polo Club Inc</li>
                        <li className ='info-item'>1027 E 2nd St, Jamestown, NY 14701</li>
                        <li className ='info-item'>(716) 665-3309</li>
                    </div>
                    <div className='help-links'>
                        <a href='/'><FontAwesomeIcon className='testicon' icon={faFacebook} size='3x'></FontAwesomeIcon></a>
                    </div>
            </Container>
        </div>
    );
};

export default Footer;