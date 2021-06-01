import React from "react";
import Base from "../Base/Base";
import "./Home.css";
import Row from "../../components/Home/Row";
import { useStateValues } from "../../contexts/StateProvider";
import { TopBar } from "../../components/TopBar";

export default function Home() {
  const [{ access_token }] = useStateValues();
  const home = () => {
    return (
      <div className="home">
        <Row
          url={access_token ? `browse/featured-playlists` : ""}
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
