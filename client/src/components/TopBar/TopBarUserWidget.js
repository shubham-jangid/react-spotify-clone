import React, { useEffect, useState } from "react";
import { useStateValues } from "../../contexts/StateProvider";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import "./TopBarUserWidget.styles.css";
import getUserProfile from "../../adapters/userDetails";

export default function TopBarUserWidget() {
  const [{ userName, access_token }, dispatch] = useStateValues();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!access_token) return;
    getUserProfile()
      .then((data) => {
        dispatch({
          type: "SET_USER_NAME",
          userName: data.display_name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [access_token]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleDropdown = () => setOpen(!isOpen);

  function logout() {
    dispatch({
      type: "SET_ACCESS_TOKEN",
      access_token: "",
    });
    window.location = "/";
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expires_in");
  }

  function dropDown() {
    return (
      <div className={`dropdown ${isOpen && "open"}`} onClick={toggleDropdown}>
        <div className="dropdown_header userWidget">
          <AccountCircleIcon />
          <h5 className="userName">{userName ? userName : "User Name"}</h5>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
        <div className={`dropdown_body ${isOpen && "open"}`}>
          <div className="dropdown_item" onClick={logout}>
            Log Out
          </div>
        </div>
      </div>
    );
  }

  return access_token && dropDown();
}
