import React from "react";
import { Container } from "react-bootstrap";
import Fade from 'react-reveal';
import '../styles/about.css'
import fond from '../assets/IMG_2173.JPG'
import food from '../assets/4.jpg'
import hall from '../assets/IMG_2150.jpeg'
import spg from '../assets/spg.jpg'
import ita from '../assets/ita.jpg'
import sci from '../assets/sci.jpg'
import sau from '../assets/sauce.jpg'
import pou from '../assets/IMG_2225.jpeg'
import mix from '../assets/mix.jpg'
import bar from '../assets/IMG_2162.jpg'
import pay from '../assets/IMG_2246.jpeg'

function About() {
      return (
          <div className='background-container'>
            <div className="curve"></div>

            <Container className='a-container'>
              <h3 style={{color:'white', textDecoration:'underline'}}>About Us</h3>
              <p style={{color:'white', textAlign:'center'}}>Located on 1027 East 2nd Street in Jamestown, New York, the Marco Polo Club is an Italian American club that aims to bring together people of all ages to share in their heritage.
                The club was founded in 1938 and has been a part of the community ever since. We offer the best spaghetti in town on the second saturday of every month. 
                Our traditional spaghetti is all homemade from the meatballs to the sauce, it tastes just like our ancestors used to make.
                If you have a upcoming event, the Marco Polo Club Hall is available for rent. The venue is spacious enough to host most events.
                Check out the <a href='/services' style={{color: 'white'}}>Services</a> tab for pricing.
              </p>
              <br></br>
              <h3 style={{color:'white', textDecoration:'underline'}}>Image Gallery</h3>
              <div className='image-container'>
                <img className='image' src={fond}/>
                <img className='image' src={ita}/>
                <img className='image' src={sci}/>
                <img className='image' src={hall}/>
                <img className='image' src={bar}/>
                <img className='image' src={pay}/>
                <img className='image' src={pou}/>
                <img className='image' src={spg}/>
                <img className='image' src={food}/>
                <img className='image' src={sau}/>
                <img className='image' src={mix}/>
              </div>
            </Container>

            <div></div>
          </div>
      );
}
export default About;