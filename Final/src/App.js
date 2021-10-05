import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header'
import Footer from './components/contact'
import Calendar from './components/calendar'
import Greetings from './components/home'
import AboutUs from './components/about'
import Service from './components/services'
import Create from './components/addevent'
import LogIn from './components/login'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Header/> {/* Add header/navbar to the top of the page */}
          <Switch>  {/* Place to hold page content that changes with path */}
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/services'>
              <Services />
            </Route>
            <Route exact path='/events'>
              <Events />
            </Route>

            <Route exact path="/login">
              <SignIn />
            </Route>

            <Route exact path="/pop">
              <Pop />
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

function SignIn() {
  return <LogIn/>;
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

function Pop() {
  if(sessionStorage.getItem('isAuth') == process.env.REACT_APP_SECURE_TOKEN){
    console.log(sessionStorage.getItem('isAuth'))
    return <Create/>;
  }
  return <Redirect to='/login'/>;
}
