import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import * as dateFormate from "../../common/constants/DateTimeFormates";

export default function courseReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.CREATE_EVENT_SUCCESS:
      var key = action.event.eventDate.format(dateFormate.DATE_FORMATE);
      return { ...state, ...{ [key]: action.event } };

    default:
      return state;
  }
}
