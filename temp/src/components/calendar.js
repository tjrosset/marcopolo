import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/calendar.css'


//used to get localized calendar date time etc using moment
const localizer = momentLocalizer(moment);

//Temporary list of events -- Will pull from database
const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
  { start: new Date(), end: new Date(), title: "test test" },
  { start: new Date('September 2, 2021 2:15:30'), end: new Date('September 2, 2021 6:30:30'), title: "1asdf34" },
  { start: new Date('September 4, 2021 5:15:30'), end: new Date('September 9, 2021 9:30:30'), title: "2223131" },
  { start: new Date('September 8, 2021 9:15:30'), end: new Date('September 9, 2021 10:30:30'), title: "adsfashg" },
  { start: new Date(), end: new Date(), title: "tsavdv" },
  { start: new Date('September 2, 2021 5:15:30'), end: new Date('September 2, 2021 9:30:30'), title: 'longer then an hour'},
  { start: new Date('September 12, 2021 23:15:30'), end: new Date('September 14, 2021 23:15:30'), title: 'more than a day'}
];

function ViewCal() {
  return (
    <div className='calendar-page'>

        {/* Container to hold the calendar */}
        <div className='calendar-container'>
            <Calendar popup localizer={localizer} events={myEventsList} startAccessor="start" endAccessor="end" views={['month','week','day']} />
        </div>
        
        {/* Container to hold the daily events */}
        <div className='daily-container'>
            <h1 className='event-text'>Todays Events</h1>
            {/* Placeholder event structure (devents) */}

        </div>

    </div>
  );
}

export default ViewCal;