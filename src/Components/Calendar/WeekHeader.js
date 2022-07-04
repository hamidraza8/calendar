import { getWeekDaysByWeekNumber } from "./CalendarUtil";
import WeekHeaderPresentation from "./WeekHeaderPresentation";
const WeekHeader = () => {
  const weekDays = getWeekDaysByWeekNumber();
  return (
    <>
      <WeekHeaderPresentation weekDays={weekDays} />
    </>
  );
};

export default WeekHeader;
