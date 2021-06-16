import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Row.styles.css";
import { getSongs } from "../../adapters/homeRequests";
import { useStateValues } from "../../contexts/StateProvider";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

import { Link } from "react-router-dom";

export default function Row({ title, url, limit }) {
  const [songs, setSongs] = useState([]);
  const [{ access_token }] = useStateValues();

  useEffect(() => {
    if (!access_token) return;
    if (!url) return;

    getSongs({ url, limit })
      .then((res) => {
        setSongs(
          res.playlists.items.map((item) => {
            return {
              id: item.id,
              name: item.name,
              image: item.images[0],
              description: item.description,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [access_token, url, limit]);

  return (
    <div className="row">
      <h2 className="row_title"> {title}</h2>
      <div className="inner_row">
        {songs?.map((song, index) => {
          return (
            <Link to={`playlist/${song.id}`} id={song.id} key={index}>
              <div className="card">
                <div className="image">
                  <img src={song.image.url} alt="poster" />
                  <div className="playButton_box">
                    <PlayCircleFilledWhiteIcon className="playButton" />
                  </div>
                </div>
                <div className="card_title">{song.name}</div>
                <div className="card_description">{song.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
