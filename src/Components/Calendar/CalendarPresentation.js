import calendar from "./Calendar.module.scss";
import * as dateFormate from "../../common/constants/DateTimeFormates";
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

            <span
              className={calendar["nav-prev-icon"]}
              onClick={changeToPrevMonth}
            >
              <LeftOutlined />
            </span>

            <span
              className={calendar["nav-next-icon"]}
              onClick={changeToNextMonth}
            >
              <RightOutlined />
            </span>
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
