import React from "react";
import { Link } from "react-router-dom";
import "./sideBarOptions.styles.css";

export default function SideBarOptions({ Icon, title, id, index }) {
  return id ? (
    <Link to={`/playlist/${id}`} id={id} key={index}>
      <div className="sideBarOption" id={id}>
        <p className={"playlist_title"} id={id}>
          {title}
        </p>
      </div>
    </Link>
  ) : (
    <div className="sideBarOption ">
      {Icon && <Icon className="sideBarOption_icon" />}
      {Icon ? (
        <span className="title">{title}</span>
      ) : (
        <p className="title ">{title}</p>
      )}
    </div>
  );
}
