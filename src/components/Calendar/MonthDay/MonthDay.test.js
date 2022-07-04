import { render, screen } from "@testing-library/react";
import configureStore from "../../../store/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import MonthDay from ".";
import moment from "moment";
import * as dateFormate from "../../../constants/DateTimeFormates";

import * as MockEvents from "../../../../__mocks-data__/events.mock";

const store = configureStore();

const currentMonth = moment("01-07-2022", dateFormate.DATE_FORMATE);
const date = moment("09-07-2022", dateFormate.DATE_FORMATE);
const toggelCalendarForm = () => {
  return true;
};

function checkDateDisplay() {
  expect(screen.getAllByText(/9/i)[0]).toBeInTheDocument();
}

describe("MonthDates Component", () => {
  let props;

  beforeEach(() => {
    props = {
      key: 1,
      date,
      currentMonth,
      eventData: MockEvents.events,
      onDayClicked: { toggelCalendarForm },
    };
  });

  it("Should render component for MonthDate", () => {
    render(
      <ReduxProvider store={store}>
        <MonthDay {...props} />
      </ReduxProvider>
    );
    checkDateDisplay();
  });
});
