import React from "react";
import { Link } from "react-router-dom";

export default function Card({ imageUrl, artistName, type, desc, id, key }) {
  return (
    <Link to={`/${type}/${id}`} id={id} key={key}>
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
