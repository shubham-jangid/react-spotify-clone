import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Row.styles.css";
import { getSongs } from "../../adapters/homeRequests";
import { useStateValues } from "../../contexts/StateProvider";

export default function Row({ title, url }) {
  const [songs, setSongs] = useState([]);
  const [{ access_token, isTokenSet }] = useStateValues();

  useEffect(() => {
    console.log("dfjkj");

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
  }, []);

  return (
    <div className="row">
      <h2 className="row_title"> {title}</h2>
      <div className="inner_row">
        <div className="card">
          <img
            src={`https://i.scdn.co/image/ab67706f000000038ed1a5002b96c2ea882541b2`}
            alt="dfljk"
          />
          <div className="card_title">dfsdf</div>
          <div className="card_description">fdsfd sfdsfd sdf sfd sfd </div>
        </div>
      </div>
    </div>
  );
}
