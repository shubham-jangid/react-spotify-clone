import React from "react";
import Base from "../Base/Base";
import "./Home.css";
import Row from "../../components/Home/Row";
import { TopBar } from "../../components/TopBar";

export default function Home() {
  const home = () => {
    return (
      <div className="home">
        <Row
          url={`browse/featured-playlists`}
          // url={`browse/featured-playlists`}
          title={"Featured Playlists"}
        />
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
