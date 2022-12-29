import React from 'react'
import './Calendar.css'

function Calendar() {
  return (
    <div id='calendar-container'>
      <div id='pad-box'>
        <div id='title'>
          <span>EVENTOS</span>
          <div id='hr'><hr></hr></div>
        </div>
        <div id='calendar'>
        </div>  
      </div>

    </div>
  )
}

export default Calendar
