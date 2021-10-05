import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap'
import '../styles/header.css'

var path = window.location.pathname

function Header(){
    {/* Lazy and easy way to detect which tab is selected // Definetly not that effecient */}
    if(path=='/about'){
        return(
            <div className='header-container'>
            <Navbar className='color-nav'>
                <Container>
                    <Nav.Link href='/'>
                        <h6>Home</h6>
                    </Nav.Link>
                    <Nav.Link className='nav-link-active' href='/about'>
                        <h6>About</h6>
                    </Nav.Link>
                    <Nav.Link href='/services'>
                        <h6>Services</h6>
                    </Nav.Link>
                    <Nav.Link href='/events'>
                        <h6>Events</h6>
                    </Nav.Link>
                </Container>
            </Navbar>
            </div>
        );
    }
    if(path=='/'){
        return(
            <div className='header-container'>
            <Navbar className='color-nav'>
                <Container>
                    <Nav.Link  className='nav-link-active' href='/'>
                        <h6>Home</h6>
                    </Nav.Link>
                    <Nav.Link href='/about'>
                        <h6>About</h6>
                    </Nav.Link>
                    <Nav.Link href='/services'>
                        <h6>Services</h6>
                    </Nav.Link>
                    <Nav.Link href='/events'>
                        <h6>Events</h6>
                    </Nav.Link>
                </Container>
            </Navbar>
            </div>
        );
    }
    if(path=='/services'){
        return(
            <div className='header-container'>
            <Navbar className='color-nav'>
                <Container>
                    <Nav.Link href='/'>
                        <h6>Home</h6>
                    </Nav.Link>
                    <Nav.Link href='/about'>
                        <h6>About</h6>
                    </Nav.Link>
                    <Nav.Link className='nav-link-active' href='/services'>
                        <h6>Services</h6>
                    </Nav.Link>
                    <Nav.Link href='/events'>
                        <h6>Events</h6>
                    </Nav.Link>
                </Container>
            </Navbar>
            </div>
        );
    }
    if(path=='/events'){
        return(
            <div className='header-container'>
            <Navbar className='color-nav'>
                <Container>
                    <Nav.Link href='/'>
                        <h6>Home</h6>
                    </Nav.Link>
                    <Nav.Link href='/about'>
                        <h6>About</h6>
                    </Nav.Link>
                    <Nav.Link href='/services'>
                        <h6>Services</h6>
                    </Nav.Link>
                    <Nav.Link className='nav-link-active' href='/events'>
                        <h6>Events</h6>
                    </Nav.Link>
                </Container>
            </Navbar>
            </div>
        );
    }
    return(
        <div className='header-container'>
        <Navbar className='color-nav'>
            <Container>
                <Nav.Link href='/'>
                    <h6>Home</h6>
                </Nav.Link>
                <Nav.Link href='/about'>
                    <h6>About</h6>
                </Nav.Link>
                <Nav.Link href='/services'>
                    <h6>Services</h6>
                </Nav.Link>
                <Nav.Link href='/events'>
                    <h6>Events</h6>
                </Nav.Link>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;