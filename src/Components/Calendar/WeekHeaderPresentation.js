import "./Calendar.scss";

const WeekHeaderPresentation = ({ weekDays }) => {
  return (
    <div className="calendar-headings">
      {weekDays.map((weekDay) => (
        <div key={weekDay.dayNumber} className="calendar-heading">
          {weekDay.day}
        </div>
      ))}
    </div>
  );
};

export default WeekHeaderPresentation;
