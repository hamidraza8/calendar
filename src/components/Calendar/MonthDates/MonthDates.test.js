import { render, screen } from "@testing-library/react";
import configureStore from "../../../store/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import MonthDates from ".";
import moment from "moment";
import * as DateTimeFormates from "../../../constants/DateTimeFormates";
import * as MockEvents from "../../../../__mocks-data__/events.mock";
import * as calendarDates from "../../../../__mocks-data__/datesExpectedDisplayValues.mock";

const store = configureStore();
const currentMonth = moment("01-07-2022", DateTimeFormates.DATE_FORMATE);

const toggelCalendarForm = () => {
  return true;
};

function datesAreDisplayingAsExpected() {
  calendarDates.datesExpectedDisplayValues.forEach((day) => {
    expect(screen.getAllByText(day)[0]).toBeInTheDocument();
  });
}
describe("MonthDates Component", () => {
  let props;

  beforeEach(() => {
    props = {
      currentMonth,
      eventData: MockEvents.events,
      onDayClicked: { toggelCalendarForm },
    };
  });

  it("Should render component for MonthDates", () => {
    render(
      <ReduxProvider store={store}>
        <MonthDates {...props} />
      </ReduxProvider>
    );

    datesAreDisplayingAsExpected();
  });
});
