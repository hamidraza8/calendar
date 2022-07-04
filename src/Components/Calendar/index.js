import moment from "moment";
import { useEffect, useState } from "react";
import MonthDates from "./MonthDates";
import AddEventForm from "./AddEventForm";
import CalendarPresentation from "./CalendarPresentation";
import * as dateFormate from "../../common/constants/DateTimeFormates";
import { connect } from "react-redux";
import { setCurrentMonth } from "../../redux/actions/monthActions";
import PropTypes from "prop-types";

const EventCalendar = (props) => {
  const [toggelForm, setToggelForm] = useState(true);
  const [currentMonthDate, setCurrentMonthDate] = useState({});

  useEffect(() => {
    console.log("useEffect setting data", props.currentMonth);
    setCurrentMonthDate(props.currentMonth);
  }, [props.currentMonth]);

  const [selectedDate, setselectedDate] = useState(
    moment().format(dateFormate.DATE_FORMATE)
  );
  const [eventData, setEvents] = useState({});

  const toggelCalendarForm = (date, eventDetail) => {
    setEvents(eventDetail);
    setToggelForm(!toggelForm);
    if (toggelForm) setselectedDate(date);
  };
  const changeToPrevMonth = () => {
    let _currentMonth = currentMonthDate.clone().add(-1, "Month");

    props.setCurrentMonth(_currentMonth);
  };
  const changeToNextMonth = () => {
    let _currentMonth = currentMonthDate.clone().add(1, "Month");

    props.setCurrentMonth(_currentMonth);
  };

  let calendarComponent = toggelForm ? (
    <MonthDates
      currentMonth={props.currentMonth}
      eventData={eventData}
      onDayClicked={toggelCalendarForm}
    />
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
      changeToNextMonth={changeToNextMonth}
      changeToPrevMonth={changeToPrevMonth}
      currentMonth={props.currentMonth}
    />
  );
};
EventCalendar.propTypes = {
  setCurrentMonth: PropTypes.func.isRequired,
  currentMonth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  let currentMonth = state.currentMonth.currentMonth;
  return {
    currentMonth,
  };
}
const mapDispatchToProps = {
  setCurrentMonth,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCalendar);
