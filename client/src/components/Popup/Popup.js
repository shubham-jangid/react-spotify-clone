import React from "react";
import "./Popup.styles.css";
import { AUTH_URL } from "../../adapters/authRequests";

export default function Popup({ popupDetail, popupHeading }) {
  return (
    <div className="popup_container">
      <div className="popup_heading">
        <h5>{popupHeading}</h5>
      </div>
      <div className="popup_details">
        <p>{popupDetail}</p>
      </div>
      <div className="popup_button_div">
        <a href={AUTH_URL} className="popup_button">
          Login
        </a>
      </div>
    </div>
  );
}
