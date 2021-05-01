import React from "react";
import "../styles/components/topBar.css";
import Login from "./Login";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBar__button_signup topBar__button">sign up</div>
      <div className="topBar__button_login topBar__button">{Login()}</div>
    </div>
  );
}
