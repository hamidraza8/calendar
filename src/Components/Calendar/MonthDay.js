import { isCurrentMonthDate } from "./CalendarUtil";
import MonthDayPresentation from "./MonthDayPresentation";
import moment from "moment";
import * as dateFormate from "./dateTimeFormates";
import "./Calendar.scss";
const MonthDay = (props) => {
  let eventName = props.eventData ? props.eventData.Name : undefined;
  let fromEventTime = props.eventData?.EventTime[0].format(
    dateFormate.TIME_FORMATE
  );
  let toEventTime = props.eventData?.EventTime[1].format(
    dateFormate.TIME_FORMATE
  );
  let Detail = props.eventData ? props.eventData.Detail : undefined;
  let date = moment(props.date, dateFormate.DATE_FORMATE);
  const currentDate = moment().format(dateFormate.DATE_FORMATE);
  const calenderDate = date.format(dateFormate.DATE_FORMATE);
  let dateDisplay = date.format("DD").replace(/^0+/, "");
  let dayClassName =
    currentDate === calenderDate ? "calendar-day is-active" : "calendar-day";
  dayClassName = !isCurrentMonthDate(date)
    ? dayClassName + " disabled-day"
    : dayClassName;

  let eventClassName =
    currentDate === calenderDate
      ? "calendar-event is-active"
      : "calendar-event";

  const onDayClicked = () => {
    if (isCurrentMonthDate(moment(props.date, dateFormate.DATE_FORMATE))) {
      props.onDayClicked(props.date, props.eventData);
    }
  };

  return (
    <MonthDayPresentation
      eventName={eventName}
      fromEventTime={fromEventTime}
      toEventTime={toEventTime}
      Detail={Detail}
      date={date}
      dateDisplay={dateDisplay}
      dayClassName={dayClassName}
      eventClassName={eventClassName}
      onDayClicked={onDayClicked}
    />
  );
};
export default MonthDay;
