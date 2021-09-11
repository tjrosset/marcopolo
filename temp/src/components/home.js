import React from 'react';
import {Container, Carousel} from 'react-bootstrap'
import '../styles/home.css'
import building from '../assets/mp.JPG'
import map from '../assets/map.JPG'
import spag from '../assets/spag.jpg'
import logo from '../assets/log.png'

function Home(){
    return(
        <div className='home-container'>
            <Container className='carousel-container'>
                <Container className='title-banner'>
                    <h1 className='club-title'>Marco Polo Club</h1>
                    <h2 className='club-description'>An Italian American Family</h2>
                </Container>
            <Carousel>
                <Carousel.Item>
                    <img className="test" src={building} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Our Building</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="test" src={map} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Find us on the Map!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="test" src={spag} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Come Try Our Spaghetti Dinner</h3>
                    </Carousel.Caption>
                </Carousel.Item>               
            </Carousel>
            <br></br>
            </Container>
        </div>
    );
};

export default Home;