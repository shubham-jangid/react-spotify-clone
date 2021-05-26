import React from "react";
import Base from "./Base";
import "./Home.css";
import Row from "../components/Home/Row";
import { useStateValues } from "../contexts/StateProvider";

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

  return <Base>{home()}</Base>;
}
