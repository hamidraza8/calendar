import * as types from "./actionTypes";

export function CreateEvent(event) {
  return { type: types.CREATE_EVENT_SUCCESS, event };
}
