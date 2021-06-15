import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { TopBar } from "../../components/TopBar";
import { getCategoryPlaylists } from "../../adapters/getCategoryPlaylists";
import { useParams } from "react-router-dom";
import Card from "../../components/Search/Card";
import "../SearchBody/SearchBody.styles.css";
import "../../components/Home/Row.styles.css";
import { useStateValues } from "../../contexts/StateProvider";

export default function CategoryPlaylistsBody() {
  const [categoryPlaylists, setcategoryPlaylists] = useState([]);
  const [{ access_token }] = useStateValues();
  let id = useParams().id;

  useEffect(() => {
    if (!access_token) return;
    getCategoryPlaylists(id)
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
  }, [access_token]);

  function ShowCategoriePlaylists() {
    return (
      <div className="searchBody">
        <div className="row">
          <h2 className="row_title"> Browse All</h2>

          <div className="inner_row categories_row">
            {categoryPlaylists?.map((categoryPlaylist, index) => {
              return (
                <Card
                  artist_name={categoryPlaylist.name}
                  id={categoryPlaylist.id}
                  image_url={categoryPlaylist?.image?.url}
                  key={index}
                  type={"playlist"}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Base>
      <TopBar />
      {ShowCategoriePlaylists()}
    </Base>
  );
}
