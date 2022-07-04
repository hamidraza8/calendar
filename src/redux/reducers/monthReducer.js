import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function monthReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENTMONTH_SUCCESS:
      let newstate = { ...state };
      let newdate = action.currentMonth;
      newstate.currentMonth = newdate;
      return newstate;

    default:
      return state;
  }
}
