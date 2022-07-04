import { combineReducers } from "redux";
import events from "./eventReducer";
import currentMonth from "./monthReducer";

const rootReducer = combineReducers({
  events,
  currentMonth,
});

export default rootReducer;
