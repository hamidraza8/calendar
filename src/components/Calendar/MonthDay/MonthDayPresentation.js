import { Popover } from "antd";
import calendar from "./MonthDay.module.scss";
import * as dateFormate from "../../../constants/DateTimeFormates";
const MonthDayPresentation = (props) => {
  const EventDetailPopupContent = (
    <div>
      <div className={calendar["event-detail-head"]}>{props.eventName}</div>
      {
        <div className={calendar["event-detail-content"]}>
          On <b>{props.date.format(dateFormate.MONTH_DAY_DISPLAY_FORMATE)} </b>{" "}
          From <b>{props.fromEventTime}</b> To <b>{props.toEventTime}</b>
        </div>
      }
      <div
        className={[calendar["event-detail-head"], calendar["head2"]].join(" ")}
      >
        Detail:
      </div>
      <p className={calendar["event-detail-content"]}>{props.Detail}</p>
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
