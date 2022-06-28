import "./Calendar.scss";
import { LeftOutlined, CalendarOutlined } from "@ant-design/icons";

const CalendarPresentation = (props) => {
  return (
    <div className="calendar-container">
      <div className="calendar-nav">
        {!props.toggelForm ? (
          <>
            <span onClick={props.toggelCalendarForm}>
              <LeftOutlined />
            </span>
            <span className="nav-text">Add Event</span>
          </>
        ) : (
          <>
            <span className="nav-icon">
              <CalendarOutlined />
            </span>
            <span className="nav-text">Calendar</span>
          </>
        )}
      </div>

      {props.calendarComponent}
    </div>
  );
};

export default CalendarPresentation;
