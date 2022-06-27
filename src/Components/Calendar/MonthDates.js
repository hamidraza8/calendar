import "./Calendar.scss";
import {
  getdateRange,
  getFirstDateOfCalendar,
  getLastDateOfCalendar,
} from "./CalendarUtil";
import MonthDatesPresentation from "./MonthDatesPrsentation";
const MonthDates = (props) => {
  var startDate = getFirstDateOfCalendar();
  const endDate = getLastDateOfCalendar();
  const daysOfMonth = getdateRange(startDate, endDate);
  return (
    <>
      <MonthDatesPresentation
        daysOfMonth={daysOfMonth}
        eventData={props.eventData}
        onDayClicked={props.onDayClicked}
      />
    </>
  );
};
export default MonthDates;
