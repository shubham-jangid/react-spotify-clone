import React from "react";
import { Link } from "react-router-dom";
import "./sideBarOptions.styles.css";
import Popup from "../Popup/Popup";
import { useStateValues } from "../../contexts/StateProvider";

export default function SideBarOptions({
  Icon,
  title,
  id,
  popupDetail,
  popupHeading,
}) {
  const [{ access_token }] = useStateValues();

  return id ? (
    <Link to={`/playlist/${id}`} id={id}>
      <div className="sideBarOption" id={id}>
        <p className={"playlist_title"} id={id}>
          {title}
        </p>
      </div>
    </Link>
  ) : (
    <div className="sideBarOption " tabIndex="1">
      {Icon && <Icon className="sideBarOption_icon" />}
      {Icon ? (
        <span className="title">{title}</span>
      ) : (
        <p className="title ">{title}</p>
      )}
      {!access_token && popupHeading && (
        <Popup popupDetail={popupDetail} popupHeading={popupHeading} />
      )}
    </div>
  );
}
