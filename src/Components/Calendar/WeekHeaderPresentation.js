import "./Calendar.scss";

const WeekHeaderPresentation = (props) => {
  return (
    <div className="calendar-headings">
      {props.weekDays.map((weekDay) => (
        <div key={weekDay.dayNumber} className="calendar-heading">
          {weekDay.day}
        </div>
      ))}
    </div>
  );
};

export default WeekHeaderPresentation;
