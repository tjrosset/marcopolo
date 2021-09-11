import React from "react";
import { Container } from "react-bootstrap";
import Fade from 'react-reveal';
import '../styles/about.css'

function About() {
      return (
          <div>
            <Container>
              <Fade left>
              <h3>We are the Marco Polo Club, a local Italian american club that was founded in 1938</h3>
              <p>Our aim is to do this this this and that all while keeping our members and community in mind</p>
              <p>The focus is filler filler filler</p>
              <p>History of the club and members</p>
              <h4>Get to know the members</h4>
              <p>Names of people and roles</p>
              </Fade>
            </Container>
          </div>
      );
}
export default About;