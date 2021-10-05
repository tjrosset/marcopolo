import React from 'react';
import {Container, Carousel} from 'react-bootstrap'
import '../styles/home.css'
import building from '../assets/mp.JPG'
import map from '../assets/map.JPG'
import spag from '../assets/spag.jpeg'
import tlogo from '../assets/logo.png'


function Home(){
    return(
        <div className='home-container'>

            <Container className='carousel-container'>
                <Container className='title-banner'>
                    <img src={tlogo} className='logo-image'/>
                </Container>
                <br></br>
                <Carousel className='cc'>
                    <Carousel.Item>
                        <img className="test" src={building} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="test" src={map} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="test" src={spag} alt="Third slide"/>
                    </Carousel.Item>               
                </Carousel>
            <br></br>
            </Container>
        </div>
    );
};

export default Home;


/* 
<img src={tlogo} className='logo-image'/>
<Container className='title-banner'>
    <img src={tlogo} className='logo-image'/>
    <h1 className='club-title'>Marco Polo Club</h1>
    <h2 className='club-description'>An Italian American Family</h2>
</Container>

*/