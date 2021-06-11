import React from "react";
import "./Player.styles.css";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ access_token }) {
  return (
    <div className="player">
      {/* <SpotifyPlayer token={access_token} />; */}
    </div>
  );
}
