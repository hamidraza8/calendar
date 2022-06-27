import "./Calendar.scss";
import MonthDay from "./MonthDay";
import WeekHeader from "./WeekHeader";
const MonthDatesPresentation = (props) => {
  return (
    <>
      <WeekHeader />
      <div className="calendar-days">
        {props.daysOfMonth.map((day) => (
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
export default MonthDatesPresentation;
