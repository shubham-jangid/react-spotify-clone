import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Row.styles.css";
import { useStateValues } from "../../contexts/StateProvider";
import { getCategoryPlaylists } from "../../adapters/getCategoryPlaylists";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Popup from "../Popup/Popup";

export default function Row2({ title, limit, id, defaultData }) {
  const [categoryPlaylists, setcategoryPlaylists] = useState([]);
  const [{ access_token }] = useStateValues();

  useEffect(() => {
    if (!access_token) return;
    getCategoryPlaylists(id, limit)
      .then((res) => {
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

  let playlists = [];
  access_token ? (playlists = categoryPlaylists) : (playlists = defaultData);
  var ConditionalLink = access_token ? Link : "div";

  return (
    <div className="row">
      <h2 className="row_title"> {title}</h2>
      <div className="inner_row ">
        {playlists?.map((categoryPlaylist, index) => {
          return (
            <ConditionalLink
              to={`playlist/${categoryPlaylist.id}`}
              id={categoryPlaylist.id}
              key={index}
            >
              <div className="card" tabIndex="1">
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
                {!access_token && (
                  <Popup
                    popupDetail={"Please login to play songs"}
                    popupHeading={"login"}
                  />
                )}
              </div>
            </ConditionalLink>
          );
        })}
        {/* {!access_token && (
          <Popup
            popupDetail={"Please login to play songs"}
            popupHeading={"login"}
          />
        )} */}
      </div>
    </div>
  );
}
