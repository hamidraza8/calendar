import "./Calendar.scss";
import { LeftOutlined, CalendarOutlined } from "@ant-design/icons";

const CalendarPresentation = ({
  toggelForm,
  toggelCalendarForm,
  calendarComponent,
}) => {
  return (
    <div className="calendar-container">
      <div className="calendar-nav">
        {!toggelForm ? (
          <>
            <span onClick={toggelCalendarForm}>
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

      {calendarComponent}
    </div>
  );
};

export default CalendarPresentation;
