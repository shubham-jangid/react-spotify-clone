import React from "react";
import Base from "../Base/Base";
import Row from "../../components/Home/Row";
import Row2 from "../../components/Home/Row2";
import { TopBar } from "../../components/TopBar";
import { useStateValues } from "../../contexts/StateProvider";
import defaultData from "../../assets/default.json";
import "./Home.css";

export default function Home() {
  const [{ access_token }] = useStateValues();

  const home = () => {
    return (
      <div className="home">
        <>
          {access_token && (
            <Row
              url={`browse/featured-playlists`}
              title={"Featured Playlists"}
              limit="9"
            />
          )}
          <Row2
            title={"bollywood"}
            limit="9"
            id="bollywood"
            defaultData={defaultData[0]}
          />
          <Row2
            title={"punjabi"}
            limit="9"
            id="punjabi"
            defaultData={defaultData[1]}
          />
          <Row2
            title={"romance"}
            limit="9"
            id="romance"
            defaultData={defaultData[2]}
          />
          <Row2
            title={"devotional"}
            limit="9"
            id="devotional"
            defaultData={defaultData[3]}
          />
          <Row2
            title={"at home "}
            limit="9"
            id="at_home"
            defaultData={defaultData[4]}
          />
        </>
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
