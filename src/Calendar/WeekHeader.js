import { getWeekDaysByWeekNumber } from "./CalendarUtil";
import "./Calendar.scss";

const WeekHeader = () => {
  const weekDays = getWeekDaysByWeekNumber();
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

export default WeekHeader;
