import React from "react";
import Base from "./Base";
import "../styles/Pages/Home.css";

export default function Home() {
  const home = () => {
    return <div className="home">home</div>;
  };

  return <Base>{home()}</Base>;
}