import { render, screen } from "@testing-library/react";
import Calendar from ".";
import * as dateFormate from "../../constants/DateTimeFormates";
import configureStore from "../../store/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import moment from "moment";
import userEvent from "@testing-library/user-event";

const store = configureStore();

const testDefaultView = (month_change_value = 0) => {
  const CalendarHeaderTxt = screen.getByText(/Calendar/);
  expect(CalendarHeaderTxt).toBeInTheDocument();

  let currentMonth = moment()
    .add(month_change_value, "month")
    .format(dateFormate.MONTH_DISPLAY_FORMATE);

  const CalendarHeaderCurrentMonth = screen.getByText(currentMonth);
  expect(CalendarHeaderCurrentMonth).toBeInTheDocument();

  let CalendarHeaderWeeks = screen.getByText(/Sunday/);
  expect(CalendarHeaderWeeks).toBeInTheDocument();

  CalendarHeaderWeeks = screen.getByText(/Monday/);
  expect(CalendarHeaderWeeks).toBeInTheDocument();
  CalendarHeaderWeeks = screen.getByText(/Tuesday/);
  expect(CalendarHeaderWeeks).toBeInTheDocument();
  CalendarHeaderWeeks = screen.getByText(/Wednesday/);
  expect(CalendarHeaderWeeks).toBeInTheDocument();
  CalendarHeaderWeeks = screen.getByText(/Thursday/);
  expect(CalendarHeaderWeeks).toBeInTheDocument();
  CalendarHeaderWeeks = screen.getByText(/Friday/);
  expect(CalendarHeaderWeeks).toBeInTheDocument();
  CalendarHeaderWeeks = screen.getByText(/Saturday/);
  expect(CalendarHeaderWeeks).toBeInTheDocument();
};

test("renders calendar default", () => {
  render(
    <ReduxProvider store={store}>
      <Calendar />
    </ReduxProvider>
  );
  testDefaultView(0);

  const nextButton = screen.getByRole("button", { name: /next/i });
  userEvent.click(nextButton);
  testDefaultView(1);

  const prevButton = screen.getByRole("button", { name: /prev/i });
  userEvent.click(prevButton);
  testDefaultView(0);

  userEvent.click(prevButton);
  testDefaultView(-1);
});
