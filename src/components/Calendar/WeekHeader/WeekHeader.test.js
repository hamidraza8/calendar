import { render, screen } from "@testing-library/react";
import WeekHeader from ".";
const testWeekHeaderDays = () => {
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
test("renders week header", () => {
  render(<WeekHeader />);
  testWeekHeaderDays();
});
