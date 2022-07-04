import * as types from "./actionTypes";

export function saveEvent(event) {
  return { type: types.CREATE_EVENT_SUCCESS, event };
}
export function loadEventSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events };
}
