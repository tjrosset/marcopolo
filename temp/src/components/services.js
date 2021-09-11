import React from "react";
import Fade from 'react-reveal';
import '../styles/services.css'
import { Container } from "react-bootstrap";

import one from '../assets/8.jpg'
import two from '../assets/IMG_2160.jpg'
import three from '../assets/IMG_2156.jpg'
import four from '../assets/IMG_2162.jpg'

function Services() {
      return (
          <div className='services-container'>
            <br></br>
            <Container>
              <Fade left>
                <div className='service-container'>
                      <div className='slide-card-left'>
                        <h3>Monthly Spaghetti Dinner</h3>
                        <p>The event takes place the first saturday of every month</p>
                        <p>Prices</p>
                        <p>Plate: $8.50</p>
                      </div>
                      <div className="spag-pictures">
                        <img src={one} className="s-img"></img>
                        <img src={three} className="s-img"></img>
                      </div>
                </div>
              </Fade>
            </Container>
            <br></br>
            <Container>
              <Fade right>
                <div className='service-container'>
                      <div className='slide-card-left'>
                        <h3>Marco Polo Hall Rental</h3>
                        <p>Prices</p>
                        <p>Hall Only Rental: $8.50</p>
                        <p>Hall Plus Kitchen Rental: $8.50</p>
                      </div>
                      <div className="spag-pictures">
                        <img src={two} className="s-img"></img>
                        <img src={four} className="s-img"></img>
                      </div>
                </div>
              </Fade>
            </Container>
            <br></br>
          </div>

      );
}
export default Services;

<div className="spag-pictures">
<img src={one} className="s-img"></img>
<img src={three} className="s-img"></img>
</div>