import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./pages/Calendar";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();
root.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <Calendar />
    </React.StrictMode>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
