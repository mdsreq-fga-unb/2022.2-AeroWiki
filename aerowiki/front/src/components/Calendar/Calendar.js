import React from 'react'
import './Calendar.css'
var createReactClass = require('create-react-class')

var Iframe = createReactClass({     
  render: function() {
    return(         
      <div>          
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
      </div>
    )
  }
});

function Calendar() {
  return (
    <div id='calendar-container'>
      <div className='pad-box'>
        <div className='title'>
          <span>EVENTOS</span>
          <div className='hr'></div>
        </div>
        <div id='calendar'>
        <Iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%2300549b&ctz=America%2FSao_Paulo&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=emVuaXQuYWVyb3dpa2lAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" 
        style="border:solid 1px #777" 
        width="1248.02" 
        height="500" 
        frameborder="0" 
        scrolling="no">
        </Iframe>
        </div>  
      </div>

    </div>
  )
}

export default Calendar
