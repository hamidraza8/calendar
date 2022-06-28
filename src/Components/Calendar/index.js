import moment from "moment";
import { useState } from "react";
import MonthDates from "./MonthDates";
import AddEventForm from "./AddEventForm";
import CalendarPresentation from "./CalendarPresentation";
import * as dateFormate from "./dateTimeFormates";

const EventCalendar = () => {
  const [toggelForm, setToggelForm] = useState(true);
  const [selectedDate, setselectedDate] = useState(
    moment().format(dateFormate.DATE_FORMATE)
  );
  const [eventData, setEvenstData] = useState([]);
  const toggelCalendarForm = (date) => {
    setToggelForm(!toggelForm);
    if (toggelForm) setselectedDate(date);
  };
  const onEventAdded = (data) => {
    var key = data.eventDate.format(dateFormate.DATE_FORMATE);
    setEvenstData({ ...eventData, [key]: data });
    toggelCalendarForm();
  };

  let calendarComponent = toggelForm ? (
    <MonthDates eventData={eventData} onDayClicked={toggelCalendarForm} />
  ) : (
    <AddEventForm
      date={selectedDate}
      eventData={eventData}
      onEventAdded={onEventAdded}
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
