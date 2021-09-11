import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/header'
import Footer from './components/contact'
import Calendar from './components/calendar'
import Greetings from './components/home'
import AboutUs from './components/about'
import Service from './components/services'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Header/> {/* Add header/navbar to the top of the page */}
            
          <Switch>  {/* Place to hold page content that changes with path */}
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/events'>
              <Events />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer/> {/* Add Footer/contact tab to the bottom of the page */}
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;


function Home() {
  return <Greetings/>;
}

function About() {
  return <AboutUs/>;
}

function Services() {
  return <Service/>;
}

function Events() {
  return <Calendar/>;
}