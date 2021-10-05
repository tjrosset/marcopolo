import React from "react";
import Fade from 'react-reveal';
import '../styles/services.css'
import { Container } from "react-bootstrap";

import one from '../assets/8.jpg'
import two from '../assets/IMG_2160.jpg'
import three from '../assets/IMG_2156.jpg'
import four from '../assets/IMG_2150.jpeg'

function Services() {
      return (
          <div className='services-page'>
            <Container className='services-container'>
              <br></br>
              <Container>
                <Fade left>
                  <div className='service-container'>
                        <div className='slide-card-left'>
                          <h3>Monthly Spaghetti Dinner</h3>
                          <b>The best traditional spaghetti in town</b>
                          <br></br>
                          <h5>Prices</h5>
                          <ul>
                            <li>Adult: $10.00</li>
                            <li>Child: $5.00</li>
                            <li>Extra Sauce: $1.00</li>
                            <li>$1.00 Per Extra Meatball</li>
                          </ul>
                        </div>
                        <div className="spag-pictures">
                          <img src={one} alt='food1' className="s-img"></img>
                          <img src={three} alt='food2' className="s-img"></img>
                        </div>
                  </div>
                </Fade>
              </Container>

              <Container>
                <Fade right>
                  <div className='service-container'>
                        <div className='slide-card-left'>
                          <h3>Marco Polo Hall Rental</h3>
                          <h5>Prices</h5>
                          <ul>
                            <li>Club Rental: $300.00</li>
                            <li>Security Deposit: $200.00</li>
                          </ul>
                          <h6>To schedule a rental or for more information contact us</h6>
                        </div>
                        <div className="spag-pictures">
                          <img src={two} alt='hall1' className="s-img"></img>
                          <img src={four} alt='hall2' className="s-img"></img>
                        </div>
                  </div>
                </Fade>
              </Container>
              <br></br>
            </Container>
          </div>

      );
}
export default Services;
