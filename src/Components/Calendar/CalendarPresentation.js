import calendar from "./Calendar.module.scss";
import { LeftOutlined, CalendarOutlined } from "@ant-design/icons";

const CalendarPresentation = ({
  toggelForm,
  toggelCalendarForm,
  calendarComponent,
}) => {
  return (
    <div className={calendar["calendar-container"]}>
      <div className={calendar["calendar-nav"]}>
        {!toggelForm ? (
          <>
            <span onClick={toggelCalendarForm}>
              <LeftOutlined />
            </span>
            <span className={calendar["nav-text"]}>Add Event</span>
          </>
        ) : (
          <>
            <span className={calendar["nav-icon"]}>
              <CalendarOutlined />
            </span>
            <span className={calendar["nav-text"]}>Calendar</span>
          </>
        )}
      </div>

      {calendarComponent}
    </div>
  );
};

export default CalendarPresentation;
