import * as types from "./actionTypes";

export function setCurrentMonth(currentMonth) {
  return { type: types.SET_CURRENTMONTH_SUCCESS, currentMonth };
}
