import React from "react";
import UserWidget from "./TopBarUserWidget";
import { AUTH_URL } from "../../adapters/authRequests";
import { useStateValues } from "../../contexts/StateProvider";
import "./TopBar.styles.css";

export default function TopBar() {
  const [{ access_token }] = useStateValues();

  function Buttons() {
    return (
      <>
        <div className="topBar__button_signup topBar__button">sign up</div>

        <a href={AUTH_URL} className="topBar__button_login topBar__button">
          Login
        </a>
      </>
    );
  }

  return (
    <div className="topBar">{access_token ? <UserWidget /> : Buttons()}</div>
  );
}
