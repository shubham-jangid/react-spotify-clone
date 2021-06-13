import React, { useState, useEffect } from "react";
import Base from "../Base/Base";
import { useParams } from "react-router-dom";
import { getPlaylistDetails } from "../../adapters/playlistRequrest";
import "./playlistBody.styles.css";
import TrackDetails from "../../components/Track/TrackDetails";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import moment from "moment";
import { useStateValues } from "../../contexts/StateProvider";
import { TopBar } from "../../components/TopBar";

export default function PlaylistBody() {
  const [playlistCoverImageUrl, setPlaylistCoverImageUrl] = useState("");
  const [playlistInfo, setplaylistInfo] = useState([]);
  const [{ access_token }] = useStateValues();
  const playlist_id = useParams().id;

  useEffect(() => {
    if (!playlist_id) return;
    if (!access_token) return;
    getPlaylistDetails(playlist_id)
      .then((res) => {
        setPlaylistCoverImageUrl(res.images[0].url);

        setplaylistInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [playlist_id, access_token]);

  function playlist() {
    return (
      <div className="playlist_body">
        <div className="playlist_info">
          <div className="playlist_info_image">
            <img src={playlistCoverImageUrl} alt="cover " />
          </div>
          <div className="playlist_descption">
            <h5 className="type">{playlistInfo.type}</h5>
            <h1 className="playlist_name">{playlistInfo.name}</h1>
            <h4 className="playlist_owner">
              {playlistInfo?.owner?.display_name}
            </h4>
          </div>
        </div>
        <div className="play_all">
          <div className="play_button_area">
            <PlayCircleFilledWhiteIcon className="play_button" />
          </div>
        </div>
        <div className="playlists">
          <div className="playlists_details_1">
            <div className="index">#</div>
            <div className="title">TITLE</div>
            <div className="album">ALBUM</div>
            <div className="date_added">DATE ADDED</div>
            <div className="duration">DURATION</div>
          </div>
          {playlistInfo?.tracks?.items?.map((item, index) => {
            return (
              <TrackDetails
                index={index + 1}
                trackId={item.track.id}
                title={item.track.name}
                album={item.track.album.name}
                date_added={moment(item.added_at).format("MMM Do YY")}
                duration={(item.track.duration_ms / 60000).toFixed(2)}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <Base>
      <TopBar />

      {access_token && playlist()}
    </Base>
  );
}
