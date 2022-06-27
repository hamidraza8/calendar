import { isCurrentMonthDate } from "./CalendarUtil";
import MonthDayPresentation from "./MonthDayPresentation";
import moment from "moment";
import "./Calendar.scss";
const MonthDay = (props) => {
  let eventName = props.eventData ? props.eventData.Name : undefined;
  let fromEventTime = props.eventData?.EventTime[0].format("hh:mm a");
  let toEventTime = props.eventData?.EventTime[1].format("hh:mm a");
  let Detail = props.eventData ? props.eventData.Detail : undefined;
  let date = moment(props.date, "DD-MM-YYYY");
  const currentDate = moment().format("DD-MM-YYYY");
  const calenderDate = date.format("DD-MM-YYYY");
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
    if (isCurrentMonthDate(moment(props.date, "DD-MM-YYYY"))) {
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
