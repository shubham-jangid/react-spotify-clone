import React, { useState, useEffect } from "react";
import Base from "../Base/Base";
import { useParams } from "react-router-dom";
import "./ArtistBody.styles.css";
import TrackDetails from "../../components/Track/TrackDetails";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { useStateValues } from "../../contexts/StateProvider";
import { TopBar } from "../../components/TopBar";
import {
  getArtistDetails,
  getArtistTopTracks,
} from "../../adapters/artistRequest";

export default function ArtistBody() {
  const [artistInfo, setArtistInfo] = useState({});
  const [artistTracks, setArtistTracks] = useState([]);
  const [{ access_token }] = useStateValues();
  const [follow, setFollow] = useState("Follow");
  const artist_id = useParams().id;

  useEffect(() => {
    if (!artist_id) return;
    if (!access_token) return;

    getArtistDetails(artist_id)
      .then((res) => {
        setArtistInfo({
          imageUrl: res.images[0].url,
          name: res.name,
          followers: res.followers.total,
          type: res.type,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [artist_id, access_token]);

  useEffect(() => {
    if (!artist_id) return;
    if (!access_token) return;

    getArtistTopTracks(artist_id)
      .then((res) => {
        setArtistTracks(
          res?.tracks.map((track) => {
            const smallestImage = track.album.images.reduce(
              (result, current) => {
                if (current.height < result.heignt) return current;
                return result;
              },
              track.album.images[0]
            );

            return {
              imageUrl: smallestImage.url,
              title: track.name,
              duration: (track.duration_ms / 60000).toFixed(2),
              id: track.id,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [artist_id, access_token]);

  function artist() {
    return (
      <div className="artist_body">
        <div className="artist_info">
          <div className="artist_info_image">
            <img src={artistInfo.imageUrl} alt="cover " />
          </div>
          <div className="artist_descption">
            <h5 className="type">{artistInfo.type}</h5>
            <h1 className="artist_name">{artistInfo.name}</h1>
            <h4 className="artist_owner">followers: {artistInfo.followers}</h4>
          </div>
        </div>
        <div className="play_all">
          <div className="play_button_area">
            <PlayCircleFilledWhiteIcon className="play_button" />
          </div>
          <div className="button">
            <button>{follow}</button>
          </div>
        </div>

        <div className="artists">
          <div className="artists_details_1">
            <div className="index">#</div>
            <div className="title">TITLE</div>
            <div className="duration">DURATION</div>
          </div>
          {artistTracks?.map((track, index) => {
            return (
              <TrackDetails
                index={index + 1}
                imageUrl={track.imageUrl}
                title={track.name}
                duration={track.duration}
                key={index}
                trackId={track.id}
                type={"artist"}
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

      {access_token && artist()}
    </Base>
  );
}
