import React from "react";
import ReactDom from "react-dom";
import Routes from "./Routes";
import "./index.css";
import StateProvider from "./contexts/stateProvider";
import reducer, { initialState } from "./contexts/reducer";

ReactDom.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <Routes />
  </StateProvider>,
  document.getElementById("root")
);
