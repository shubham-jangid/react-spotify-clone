import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image_url, artist_name, type, desc, id }) {
  return (
    <Link to={`/${type}/${id}`} id={id}>
      <div className="card">
        <img
          src={image_url}
          alt="poster"
          className={desc === "artist" ? "artistsImg" : ""}
        />
        <div className="card_title">{artist_name}</div>
        <div className="card_description">{desc}</div>
      </div>
    </Link>
  );
}
