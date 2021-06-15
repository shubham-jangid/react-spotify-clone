import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Row.styles.css";
import { useStateValues } from "../../contexts/StateProvider";
import { getCategoryPlaylists } from "../../adapters/getCategoryPlaylists";
import Card from "../Search/Card";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

export default function Row2({ title, limit, id }) {
  const [categoryPlaylists, setcategoryPlaylists] = useState([]);
  const [{ access_token }] = useStateValues();

  useEffect(() => {
    if (!access_token) return;
    getCategoryPlaylists(id, limit)
      .then((res) => {
        console.log(res);
        setcategoryPlaylists(
          res.playlists.items?.map((item) => {
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
  }, [access_token, limit]);

  return (
    <div className="row">
      <h2 className="row_title"> {title}</h2>
      <div className="inner_row ">
        {categoryPlaylists?.map((categoryPlaylist, index) => {
          return (
            <Link
              to={`playlist/${categoryPlaylist.id}`}
              id={categoryPlaylist.id}
              key={index}
            >
              <div className="card">
                <div className="image">
                  <img src={categoryPlaylist.image.url} alt="poster" />
                  <div className="playButton_box">
                    <PlayCircleFilledWhiteIcon className="playButton" />
                  </div>
                </div>
                <div className="card_title">{categoryPlaylist.name}</div>
                <div className="card_description">
                  {categoryPlaylist.description}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
