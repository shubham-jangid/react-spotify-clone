import React from "react";
import { Link } from "react-router-dom";

export default function Card({ imageUrl, artistName, type, desc, id }) {
  return (
    <Link to={`/${type}/${id}`} id={id}>
      <div className="card">
        <img
          src={imageUrl}
          alt="poster"
          className={desc === "artist" ? "artistsImg" : ""}
        />
        <div className="card_title">{artistName}</div>
        <div className="card_description">{desc}</div>
      </div>
    </Link>
  );
}
