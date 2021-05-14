import React, { useState, useEffect } from "react";
import Base from "./Base";
import { useParams } from "react-router-dom";
import { spotifyApi } from "../adapters/spotifyApi";

const initalState = {
  playlist_cover_image: null,
  playlist_item: {},
};

export default function PlaylistBody() {
  const [playlistDetail, setPlaylistDetail] = useState();
  const id = useParams();
  useEffect(() => {
    if (id) return;
    spotifyApi
      .getPlaylistCoverImage({ playlistId: `${id}` })((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function playlist() {
    return (
      <div className="playlist_Body">
        <div className="body_info"> </div>
      </div>
    );
  }
  return <Base>{playlist()}</Base>;
}
