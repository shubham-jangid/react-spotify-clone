import React, { useState, useEffect } from "react";

import { getTrackDetails } from "../../adapters/trackRequests";
import "./TrackDetails.style.css";

export default function TrackDetails({
  index,
  trackId,
  title,
  album,
  date_added,
  duration,
  type,
}) {
  const [trackImageUrl, setTrackImageUrl] = useState("");
  const [trackName, setTrackName] = useState([]);

  useEffect(() => {
    if (!trackId) return "track id not provided";
    getTrackDetails(trackId)
      .then((res) => {
        setTrackImageUrl(res.album.images[res.album.images.length - 1].url);
        setTrackName(res.album.name);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [trackId]);

  return (
    <>
      {type === "album" ? (
        <div className="albums_details" id={trackId}>
          <div className="index">{index}</div>
          <div className="track_details_main">
            <div className="track_details_main__title">{trackName}</div>
          </div>
          <div className="duration">{duration}</div>
        </div>
      ) : (
        <div className="playlists_details" id={trackId}>
          <div className="index">{index}</div>
          <div className="track_details_main">
            <img src={trackImageUrl} alt="coverImage" />
            <div className="track_details_main__title">{trackName}</div>
          </div>

          <div className="album">{album}</div>
          <div className="date_added">{date_added}</div>

          <div className="duration">{duration}</div>
        </div>
      )}
    </>
  );
}
