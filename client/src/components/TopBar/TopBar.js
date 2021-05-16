import React, { useEffect } from "react";
import UserWidget from "./TopBarUserWidget";
import { login, AUTH_URL } from "../../adapters/authRequests";
import { useStateValues } from "../../contexts/StateProvider";
import "./TopBar.styles.css";
import { setRequestHeader } from "../../adapters/axiosInstance";

export default function TopBar() {
  const [{ access_token, refresh_token }, dispatch] = useStateValues();
  const code = new URLSearchParams(window.location.search).get("code");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      dispatch({
        type: "SET_ACCESS_TOKEN",
        access_token: token,
      });
      setRequestHeader(token);
    }
  }, [access_token]);

  useEffect(() => {
    if (code) {
      login(code)
        .then((res) => {
          dispatch({
            type: "SET_ACCESS_TOKEN",
            access_token: res.access_token,
          });
          dispatch({
            type: "SET_REFRESH_TOKEN",
            refresh_token: res.refresh_token,
          });
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("refresh_token", res.refresh_token);
        })
        .catch((err) => {
          window.location = "/";
          alert(err);
        });
    }
  }, []);

  function Buttons() {
    return (
      <>
        <div className="topBar__button_signup topBar__button">sign up</div>
        {/* <div
          className="topBar__button_login topBar__button"
          onClick={sendLoginRequest}
        > */}
        <a href={AUTH_URL} className="topBar__button_login topBar__button">
          Login
        </a>
        {/* </div> */}
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
