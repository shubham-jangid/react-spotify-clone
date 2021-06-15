import React from "react";
import Base from "../Base/Base";
import "./Home.css";
import Row from "../../components/Home/Row";
import Row2 from "../../components/Home/Row2";

import { TopBar } from "../../components/TopBar";

export default function Home() {
  const home = () => {
    return (
      <div className="home">
        <Row
          url={`browse/featured-playlists`}
          title={"Featured Playlists"}
          limit="8"
        />
        <Row2 title={"bollywood"} limit="8" id="bollywood" />
        <Row2 title={"punjabi"} limit="8" id="punjabi" />
        <Row2 title={"romance"} limit="8" id="romance" />
        <Row2 title={"devotional"} limit="8" id="devotional" />
        <Row2 title={"at home "} limit="8" id="at_home" />
      </div>
    );
  };

  return (
    <Base>
      <TopBar />
      {home()}
    </Base>
  );
}
