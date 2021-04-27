import React from "react";
import "../styles/components/topBar.css";

export default function TopBar() {
  return (
    <div className="topBar">
      <button class="topBar__button_signin topBar__button">sign in</button>
      <button class="topBar__buttonr_signup topBar__button">sign up</button>
    </div>
  );
}
