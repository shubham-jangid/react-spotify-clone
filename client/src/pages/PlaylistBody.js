import React, { useState, useEffect } from "react";
import Base from "./Base";
import { useParams } from "react-router-dom";
import { spotifyApi } from "../adapters/spotifyApi";
import axios from "axios";
import {
  // getPlaylistCoverImage,
  getPlaylistDetails,
} from "../adapters/playlistRequrest";

export default function PlaylistBody() {
  const [playlistCoverImageUrl, setPlaylistCoverImageUrl] = useState("");
  const [playlistTrack, setPlaylistTracks] = useState([]);

  const playlist_id = useParams().id;

  useEffect(() => {
    if (!playlist_id) return;
    // if (!isTokenSet) return;
    // axios
    //   .all([getPlaylistCoverImage(playlist_id), getPlaylistTrack(playlist_id)])
    getPlaylistDetails(playlist_id)
      .then((res) => {
        console.log(res);

        setPlaylistCoverImageUrl(res.images[0].url);
        getPlaylistDetails(res.tracks.items);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [playlist_id]);

  function playlist() {
    return (
      <div className="playlist_body">
        <div className="playlist_body_info">
          <div className="playlist_body_info_image">
            <img src={playlistCoverImageUrl} alt="cover " />
          </div>
          <h5>playlist</h5>
          <div className="playlist_body_info_title">playlsit title</div>
        </div>
      </div>
    );
  }
  return <Base>{playlist()}</Base>;
}
