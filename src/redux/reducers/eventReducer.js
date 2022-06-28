import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.CREATE_EVENT_SUCCESS:
      return [...state, { ...action.event }];
    default:
      return state;
  }
}
