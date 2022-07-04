import weekHeaderStyle from "./WeekHeader.module.scss";

const WeekHeaderPresentation = ({ weekDays }) => {
  return (
    <div className={weekHeaderStyle["calendar-week-headings"]}>
      {weekDays.map((weekDay) => (
        <div
          key={weekDay.dayNumber}
          className={weekHeaderStyle["calendar-week-heading"]}
        >
          {weekDay.day}
        </div>
      ))}
    </div>
  );
};

export default WeekHeaderPresentation;
