import { getWeekDaysByWeekNumber } from "../../../utils/calendar";
import WeekHeaderPresentation from "./WeekHeaderPresentation";
const WeekHeader = (props) => {
  const weekDays = getWeekDaysByWeekNumber();
  return (
    <>
      <WeekHeaderPresentation weekDays={weekDays} />
    </>
  );
};

export default WeekHeader;
