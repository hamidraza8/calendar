import { isCurrentMonthDate } from "./CalendarUtil";
import MonthDayPresentation from "./MonthDayPresentation";
import moment from "moment";
import * as dateFormate from "../../common/constants/DateTimeFormates";
import "./Calendar.scss";
import { connect } from "react-redux";
import * as eventActions from "../../redux/actions/eventActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";
const MonthDay = (props) => {
  const [eventDetail, setEventDetail] = useState(null);
  useEffect(() => {
    if (props.events[props.date]) console.log(props.events[props.date]);

    setEventDetail(props.events[props.date]);
  }, [props, props.events]);

  let eventName = eventDetail ? eventDetail.Name : undefined;
  let fromEventTime = eventDetail?.EventTime[0].format(
    dateFormate.TIME_FORMATE
  );
  let toEventTime = eventDetail?.EventTime[1].format(dateFormate.TIME_FORMATE);
  let Detail = eventDetail ? eventDetail.Detail : undefined;
  let date = moment(props.date, dateFormate.DATE_FORMATE);
  const currentDate = moment().format(dateFormate.DATE_FORMATE);
  const calenderDate = date.format(dateFormate.DATE_FORMATE);
  let dateDisplay = date.format(dateFormate.DAY_FORMATE).replace(/^0+/, "");
  let dayClassName =
    currentDate === calenderDate ? "calendar-day is-active" : "calendar-day";
  dayClassName = !isCurrentMonthDate(date)
    ? dayClassName + " disabled-day"
    : dayClassName;

  let eventClassName =
    currentDate === calenderDate
      ? "calendar-event is-active"
      : "calendar-event";

  const onDayClicked = () => {
    if (isCurrentMonthDate(moment(date, dateFormate.DATE_FORMATE))) {
      props.onDayClicked(props.date, eventDetail);
    }
  };

  return (
    <MonthDayPresentation
      eventName={eventName}
      fromEventTime={fromEventTime}
      toEventTime={toEventTime}
      Detail={Detail}
      date={date}
      dateDisplay={dateDisplay}
      dayClassName={dayClassName}
      eventClassName={eventClassName}
      onDayClicked={onDayClicked}
    />
  );
};

MonthDay.propTypes = {
  //  loadEvents: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //    loadEvents: bindActionCreators(eventActions.loadEvents, dispatch),
    },
  };
}
function mapStateToProps(state) {
  let events = state.events ? state.events : null;
  return {
    events,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthDay);
