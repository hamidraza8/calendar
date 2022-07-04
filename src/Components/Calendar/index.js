import moment from "moment";
import { useState } from "react";
import MonthDates from "./MonthDates";
import AddEventForm from "./AddEventForm";
import CalendarPresentation from "./CalendarPresentation";
import * as dateFormate from "../../common/constants/DateTimeFormates";

const EventCalendar = () => {
  const [toggelForm, setToggelForm] = useState(true);
  const [selectedDate, setselectedDate] = useState(
    moment().format(dateFormate.DATE_FORMATE)
  );
  const [eventData, setEvents] = useState({});
  const toggelCalendarForm = (date, eventDetail) => {
    setEvents(eventDetail);
    setToggelForm(!toggelForm);
    if (toggelForm) setselectedDate(date);
  };

  let calendarComponent = toggelForm ? (
    <MonthDates eventData={eventData} onDayClicked={toggelCalendarForm} />
  ) : (
    <AddEventForm
      date={selectedDate}
      eventData={eventData}
      toggelCalendarForm={toggelCalendarForm}
    />
  );
  return (
    <CalendarPresentation
      calendarComponent={calendarComponent}
      toggelCalendarForm={toggelCalendarForm}
      toggelForm={toggelForm}
    />
  );
};
export default EventCalendar;
