import calendar from "./Calendar.module.scss";
import MonthDay from "./MonthDay";
import WeekHeader from "./WeekHeader";
const MonthDatesPresentation = (props) => {
  return (
    <>
      <WeekHeader />
      <div className={calendar["calendar-days"]}>
        {props.daysOfMonth.map((day) => (
          <MonthDay
            key={day.id}
            date={day.date}
            onDayClicked={props.onDayClicked}
          />
        ))}
      </div>
    </>
  );
};
export default MonthDatesPresentation;
