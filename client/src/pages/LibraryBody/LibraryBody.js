import React from "react";
import Base from "../Base/Base";
import "./LibraryBody.styles.css";
import Row from "../../components/Library/Row";
import { TopBar } from "../../components/TopBar";

export default function LibraryBody() {
  const body = () => {
    return (
      <div className="home">
        <Row
          // url={`browse/featured-playlists`}
          title={"Playlists"}
        />
      </div>
    );
  };

  return (
    <Base>
      <TopBar />
      {body()}
    </Base>
  );
}
