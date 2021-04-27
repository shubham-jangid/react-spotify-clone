import React from "react";
import "../styles/components/topBar.css";

export default function TopBar() {
  return (
    <div className="topBar">
      <button class="topBar__button_signup topBar__button">sign up</button>
      <button class="topBar__button_login topBar__button">log in</button>
    </div>
  );
}
