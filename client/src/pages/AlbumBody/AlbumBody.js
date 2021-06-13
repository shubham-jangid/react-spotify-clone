import React, { useState, useEffect } from "react";
import Base from "../Base/Base";
import { useParams } from "react-router-dom";
import { getAlbumDetails } from "../../adapters/albumRequest";
import "./AlbumBody.styles.css";
import TrackDetails from "../../components/Track/TrackDetails";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { useStateValues } from "../../contexts/StateProvider";
import { TopBar } from "../../components/TopBar";

export default function AlbumBody() {
  const [albumCoverImageUrl, setAlbumCoverImageUrl] = useState("");
  const [albumInfo, setAlbumInfo] = useState([]);
  const [{ access_token }] = useStateValues();
  const album_id = useParams().id;

  useEffect(() => {
    if (!album_id) return;
    if (!access_token) return;
    getAlbumDetails(album_id)
      .then((res) => {
        setAlbumCoverImageUrl(res.images[0].url);
        setAlbumInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [album_id, access_token]);

  function album() {
    return (
      <div className="album_body">
        <div className="album_info">
          <div className="album_info_image">
            <img src={albumCoverImageUrl} alt="cover " />
          </div>
          <div className="album_descption">
            <h5 className="type">{albumInfo.album_type}</h5>
            <h1 className="album_name">{albumInfo.name}</h1>
            <h4 className="album_owner">
              {albumInfo?.artists && albumInfo?.artists[0].name}
            </h4>
          </div>
        </div>
        <div className="play_all">
          <div className="play_button_area">
            <PlayCircleFilledWhiteIcon className="play_button" />
          </div>
        </div>
        <div className="albums">
          <div className="albums_details_1">
            <div className="index">#</div>
            <div className="title">TITLE</div>
            <div className="duration">DURATION</div>
          </div>
          {albumInfo?.tracks?.items?.map((item, index) => {
            return (
              <TrackDetails
                index={index + 1}
                title={item.name}
                duration={(item.duration_ms / 60000).toFixed(2)}
                key={index}
                trackId={item.id}
                type={"album"}
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

      {access_token && album()}
    </Base>
  );
}
