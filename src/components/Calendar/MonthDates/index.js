import {
  getdateRange,
  getFirstDateOfCalendar,
  getLastDateOfCalendar,
} from "../../../utils/calendar";

import MonthDatesPresentation from "./MonthDatesPrsentation";

const MonthDates = (props) => {
  var startDate = getFirstDateOfCalendar(props.currentMonth.clone());
  const endDate = getLastDateOfCalendar(props.currentMonth.clone());
  const daysOfMonth = getdateRange(startDate, endDate);

  return (
    <>
      <MonthDatesPresentation
        daysOfMonth={daysOfMonth}
        eventData={props.eventData}
        onDayClicked={props.onDayClicked}
        currentMonth={props.currentMonth}
      />
    </>
  );
};

export default MonthDates;
