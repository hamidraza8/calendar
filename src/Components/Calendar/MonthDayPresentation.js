import { Popover } from "antd";
import "./Calendar.scss";
const MonthDayPresentation = (props) => {
  const EventDetailPopupContent = (
    <div>
      <div className="event-detail-head">{props.ventName}</div>
      {
        <div className="event-detail-content">
          On <b>{props.date.format("MMM Do YY")} </b> From{" "}
          <b>{props.fromEventTime}</b> To <b>{props.toEventTime}</b>
        </div>
      }
      <div className="event-detail-head head2">Detail:</div>
      <p className="event-detail-content">{props.Detail}</p>
    </div>
  );

  return (
    <div className={props.dayClassName} onClick={props.onDayClicked}>
      {props.dateDisplay}
      <Popover
        content={EventDetailPopupContent}
        placement="right"
        title="Calendar"
      >
        <div className={props.eventClassName}>
          {props.eventName}
          {props.eventName !== undefined ? (
            <>
              <div>
                {props.fromEventTime} - {props.toEventTime}
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
export default MonthDayPresentation;
