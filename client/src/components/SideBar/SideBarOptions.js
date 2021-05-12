import React from "react";
import "../../styles/components/sideBarOptions.css";

export default function SideBarOptions({ Icon, title }) {
  return (
    <div className="sideBarOption">
      {Icon && <Icon className="sideBarOption_icon" />}
      {Icon ? (
        <span className="title">{title}</span>
      ) : (
        <p className="title">{title}</p>
      )}
    </div>
  );
}
