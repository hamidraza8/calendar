import moment from "moment";
import { useEffect, useState } from "react";
import MonthDates from "../../components/Calendar/MonthDates";
import AddEventForm from "../../components/Calendar/AddEventForm";
import CalendarPresentation from "./CalendarPresentation";
import * as dateFormate from "../../constants/DateTimeFormates";
import { connect } from "react-redux";
import { setCurrentMonth } from "../../store/actions/monthActions";
import PropTypes from "prop-types";

const Calendar = (props) => {
  const [toggelForm, setToggelForm] = useState(true);
  const [currentMonthDate, setCurrentMonthDate] = useState({});

  useEffect(() => {
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
Calendar.propTypes = {
  setCurrentMonth: PropTypes.func.isRequired,
  currentMonth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  let currentMonth = state.currentMonth.thisMonth;
  return {
    currentMonth,
  };
}
const mapDispatchToProps = {
  setCurrentMonth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
