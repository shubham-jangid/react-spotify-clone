import React from "react";
import { Link } from "react-router-dom";

export default function Card({ imageUrl, artistName, desc, id, key }) {
  return (
    <Link to={`/album/${id}`} id={id} key={key}>
      <div className="card">
        {/* {console.log(img)} */}

        <img
          src={imageUrl}
          alt="poster"
          className={desc === "artist" && "artistsImg"}
        />
        <div className="card_title">{artistName}</div>
        <div className="card_description">{desc}</div>
      </div>
    </Link>
  );
}
