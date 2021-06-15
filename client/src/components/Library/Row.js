import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Home/Row.styles.css";
import { useStateValues } from "../../contexts/StateProvider";
import { Link } from "react-router-dom";
import { getUserPlaylists } from "../../adapters/userDetails";

export default function Row({ title }) {
  const [playlists, setPlaylists] = useState([]);
  const [{ access_token }] = useStateValues();

  useEffect(() => {
    if (!access_token) return setPlaylists([]);
    getUserPlaylists()
      .then((res) => {
        setPlaylists(
          res.items?.map((item) => {
            return {
              image_url: item.images[0]?.url,
              owner: item.owner.display_name,
              name: item.name,
              id: item.id,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [access_token]);

  return (
    <div className="row">
      <h2 className="row_title"> {title}</h2>
      <div className="inner_row">
        {playlists?.map((item, index) => {
          return (
            <Link to={`/playlist/${item?.id}`} id={item?.id} key={index}>
              <div className="card">
                <img src={item?.image_url} alt="poster" />
                <div className="card_title">{item.name}</div>
                <div className="card_description">by {item.owner}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
