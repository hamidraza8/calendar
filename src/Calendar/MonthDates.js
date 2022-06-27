import "./Calendar.scss";
import {
  getdateRange,
  getFirstDateOfCalendar,
  getLastDateOfCalendar,
} from "./CalendarUtil";
import MonthDay from "./MonthDay";
import WeekHeader from "./WeekHeader";
const MonthDates = (props) => {
  var startDate = getFirstDateOfCalendar();
  const endDate = getLastDateOfCalendar();
  const daysOfMonth = getdateRange(startDate, endDate);
  return (
    <>
      <WeekHeader />
      <div className="calendar-days">
        {daysOfMonth.map((day) => (
          <MonthDay
            key={day.id}
            date={day.date}
            eventData={props.eventData[day.date]}
            onDayClicked={props.onDayClicked}
          />
        ))}
      </div>
    </>
  );
};
export default MonthDates;
