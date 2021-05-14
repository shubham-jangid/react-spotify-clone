import React, { useEffect } from "react";
import { useStateValues } from "../../contexts/StateProvider";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./TopBarUserWidget.styles.css";
import { spotifyApi } from "../../adapters/spotifyApi";

export default function TopBarUserWidget() {
  const [{ userName, isTokenSet, access_token }, dispatch] = useStateValues();
  useEffect(() => {
    if (!isTokenSet) return;

    spotifyApi
      .getMe()
      .then((data) => {
        dispatch({
          type: "SET_USER_NAME",
          userName: data.display_name,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [access_token, isTokenSet]);

  return (
    <div className="userWidget">
      <AccountCircleIcon />
      <h5 className="userName">{userName ? userName : "User Name"}</h5>
    </div>
  );
}
