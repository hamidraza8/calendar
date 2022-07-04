import calendar from "./Calendar.module.scss";

const WeekHeaderPresentation = ({ weekDays }) => {
  return (
    <div className={calendar["calendar-headings"]}>
      {weekDays.map((weekDay) => (
        <div key={weekDay.dayNumber} className={calendar["calendar-heading"]}>
          {weekDay.day}
        </div>
      ))}
    </div>
  );
};

export default WeekHeaderPresentation;
