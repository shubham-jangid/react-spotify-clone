import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Row.styles.css";
import { getSongs } from "../../adapters/homeRequests";
import { useStateValues } from "../../contexts/StateProvider";
import { Link } from "react-router-dom";

export default function Row({ title, url }) {
  const [songs, setSongs] = useState([]);
  const [{ access_token, isTokenSet }] = useStateValues();

  useEffect(() => {
    if (!access_token) return;
    getSongs({ url })
      .then((songs) => {
        console.log(songs);

        setSongs(songs);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }, [access_token, url]);

  return (
    <div className="row">
      <h2 className="row_title"> {title}</h2>
      <div className="inner_row">
        {songs?.map((song, index) => {
          return (
            <Link to={`/playlist/${song.id}`} id={song.id}>
              <div className="card" id={song?.id}>
                <img src={song?.images[0]?.url} alt="dfljk" />
                <div className="card_title">{song?.name}</div>
                <div className="card_description">{song?.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
