import React from "react";
import { useStateValues } from "../../contexts/stateProvider";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "./TopBarUserWidget.styles.css";

export default function TopBarUserWidget() {
  const [{ user }] = useStateValues();
  return (
    <div className="userWidget">
      <AccountCircleIcon />
      <h5 className="userName">{user ? user : "User Name"}</h5>
    </div>
  );
}
