import React from "react";
import Login from "./Login";
import UserWidget from "./TopBarUserWidget";
import { useStateValues } from "../../contexts/StateProvider";
import "./TopBar.styles.css";

export default function TopBar() {
  const [{ access_token }] = useStateValues();

  function Buttons() {
    return (
      <>
        <div className="topBar__button_signup topBar__button">sign up</div>
        <div className="topBar__button_login topBar__button">{Login()}</div>
      </>
    );
  }
  return (
    <div className="topBar">
      {/* { {token}?{UserWidget():{buttons()}} */}
      {access_token ? <UserWidget /> : Buttons()}
    </div>
  );
}
