import moment from "moment";
import { isCurrentMonthDate } from "../utils/calendar";
test("calendar utility function isCurrentMonthDate", () => {
  expect(isCurrentMonthDate(moment().add(1, "months"), moment())).toBe(false);
  expect(isCurrentMonthDate(moment(), moment())).toBe(true);
});

test("calendar utility function getFirstDateOfCalendar", () => {
  expect(isCurrentMonthDate(moment().add(1, "months"), moment())).toBe(false);
  expect(isCurrentMonthDate(moment(), moment())).toBe(true);
});
