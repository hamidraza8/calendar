import calendar from "./Calendar.module.scss";
import * as dateFormate from "../../constants/DateTimeFormates";
import {
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const CalendarPresentation = ({
  toggelForm,
  toggelCalendarForm,
  calendarComponent,
  currentMonth,
  changeToNextMonth,
  changeToPrevMonth,
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
            <span className={calendar["nav-icon"]}>Calendar</span>
            <button aria-label="prev" onClick={changeToPrevMonth}>
              <span className={calendar["nav-prev-icon"]}>
                <LeftOutlined />
              </span>
            </button>
            <button aria-label="next" onClick={changeToNextMonth}>
              <span className={calendar["nav-next-icon"]}>
                <RightOutlined />
              </span>
            </button>
            <span className={calendar["nav-icon"]}>
              {currentMonth.format(dateFormate.MONTH_DISPLAY_FORMATE)}
            </span>
          </>
        )}
      </div>

      {calendarComponent}
    </div>
  );
};

export default CalendarPresentation;
