import moment from 'moment';
import './Calendar.scss';
import {LeftOutlined,CalendarOutlined,}  from '@ant-design/icons'
import { useState } from 'react';
import MonthDates from './MonthDates'
import AddEventForm from './AddEventForm'

const EventCalendar=()=>
{ 
  const [toggelForm,setToggelForm]= useState(true)
  const [selectedDate,setselectedDate]= useState(moment().format("DD-MM-YYYY"))
  const [eventData,setEvenstData]= useState([]);
  const toggelCalendarForm=(date)=>
 {
  setToggelForm(!toggelForm);
  if(toggelForm)
  setselectedDate(date);
}
const onEventAdded=(data)=>{
var key=data.eventDate.format('DD-MM-YYYY');
  setEvenstData({ ...eventData, [key]: data })
  toggelCalendarForm(); 
} ;
 
let calendarComponent=toggelForm?
<MonthDates eventData={eventData}  onDayClicked={toggelCalendarForm} />:
<AddEventForm date={selectedDate} eventData={eventData}  onEventAdded={onEventAdded}/>
return(
<div className='calendar-container'>
  <div className='calendar-nav'>
    { (!toggelForm)?
    (<><span   onClick={toggelCalendarForm}> <LeftOutlined /> </span>
    <span className='nav-text'>
      Add Event
      </span>
      </>) 
      :<><span className='nav-icon'><CalendarOutlined /></span><span className='nav-text'>Calendar</span></>
      }
  </div>
  {calendarComponent}
  </div>)
  }
export default EventCalendar;
