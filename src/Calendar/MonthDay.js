import { isCurrentMonthDate } from "./CalendarUtil";
import { Popover } from "antd";
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
  const EventDetailPopupContent = (
    <div>
      <div className="event-detail-head">{eventName}</div>
      {
        <div className="event-detail-content">
          On <b>{date.format("MMM Do YY")} </b> From <b>{fromEventTime}</b> To{" "}
          <b>{toEventTime}</b>
        </div>
      }
      <div className="event-detail-head head2">Detail:</div>
      <p className="event-detail-content">{Detail}</p>
    </div>
  );

  return (
    <div className={dayClassName} onClick={onDayClicked}>
      {dateDisplay}
      <Popover
        content={EventDetailPopupContent}
        placement="right"
        title="Calendar"
      >
        <div className={eventClassName}>
          {eventName}
          {eventName !== undefined ? (
            <>
              <div>
                {fromEventTime} - {toEventTime}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </Popover>
    </div>
  );
};
export default MonthDay;
