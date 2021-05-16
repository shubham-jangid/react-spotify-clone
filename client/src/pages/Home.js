import React from "react";
import Base from "./Base";
import "./Home.css";
import Row from "../components/Home/Row";

export default function Home() {
  const home = () => {
    return (
      <div className="home">
        <Row url={`browse/featured-playlists`} title={"Featured Playlists"} />;
      </div>
    );
  };

  return <Base>{home()}</Base>;
}
