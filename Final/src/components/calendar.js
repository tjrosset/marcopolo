import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/calendar.css'
// Initialize Firebase
import db from './firestore';
import firebase from 'firebase/compat/app';
import firestore from 'firebase/compat'

//used to get localized calendar date time etc using moment
const localizer = momentLocalizer(moment);

function ViewCal() {
  const [events,setEvent]=useState([]);
  
  const getEvents = ()=>{
    db.collection("events").get().then((querySnapshot) => {
      //loop through docs
        querySnapshot.forEach(element => {
            var item = element.data().array;
            //must call toDate on firebases timestamp 
            setEvent(arr => [...arr , {title: item.title, start_date: item.start_date.toDate(), end_date: item.end_date.toDate()}]);
        });
        //logging events to check data
        //console.log(events)
    })
  }
  
  
  window.addEventListener('load', () => {
    getEvents();
  });

  return (
    <div className='calendar-page'>

        {/* Container to hold the calendar */}
        <Container className='calendar-container'>
            <Calendar className='calendar' popup localizer={localizer} events={events} startAccessor="start_date" endAccessor="end_date" views={['month']} />
        </Container>

    </div>
  );
}

export default ViewCal;