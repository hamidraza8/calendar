import moment from "moment";
import * as dateFormate from "../../common/constants/DateTimeFormates";
const isCurrentMonthDate = function (currentMonth, date) {
  const currentMonthFirstDate = moment(currentMonth).startOf("M");
  const currentMonthLastDate = moment(currentMonth).endOf("M");
  return !(
    moment(date).isBefore(currentMonthFirstDate) ||
    moment(date).isAfter(currentMonthLastDate)
  );
};

const getdateRange = function (startDate, endDate) {
  let dateRange = [];
  let currentDate = startDate;
  let index = 0;
  while (currentDate.isBefore(endDate)) {
    dateRange.push({
      date: currentDate.format(dateFormate.DATE_FORMATE),
      id: index++,
    });

    currentDate.add(1, "day");
  }
  return dateRange;
};
const firstDayOfWeek = "Su";
const getFirstDateOfCalendar = function (currentMonth) {
  let currentDate = currentMonth.startOf("month");

  let count = 7;
  do {
    let dayofWeek = currentDate.format(dateFormate.WEEK_DAY_FORMATE);

    if (dayofWeek === firstDayOfWeek) {
      return currentDate;
    }
    currentDate = currentDate.add(-1, "day");

    count--;
  } while (count >= 0);

  return currentDate;
};
const lastDayOfWeek = "Sa";
const getLastDateOfCalendar = function (currentMonth) {
  var currentDate = currentMonth.endOf("month");
  var dayofWeek = currentDate.format(dateFormate.WEEK_DAY_FORMATE);
  while (dayofWeek !== lastDayOfWeek) {
    currentDate.add(1, "day");
    dayofWeek = currentDate.format(dateFormate.WEEK_DAY_FORMATE);
  }

  return currentDate.add(7, "days");
};

const getWeekDaysByWeekNumber = function () {
  var date = moment().isoWeek(1).startOf("week"),
    weeklength = 7,
    result = [];
  let dayNumber = 0;
  while (weeklength--) {
    result.push({
      dayNumber: dayNumber++,
      day: date.format(dateFormate.WEEK_DAY_DISPAY_FORMATE),
    });
    date.add(1, "day");
  }
  return result;
};

export {
  isCurrentMonthDate,
  getdateRange,
  getFirstDateOfCalendar,
  getLastDateOfCalendar,
  getWeekDaysByWeekNumber,
};
