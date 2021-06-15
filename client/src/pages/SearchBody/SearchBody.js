import React, { useEffect, useCallback } from "react";
import Base from "../Base/Base";
import "./SearchBody.styles.css";
import { useState } from "react";
import { TopBar } from "../../components/TopBar";
import SearchBar from "../../components/TopBar/SearchBar.";
import {
  searchRequests,
  searchCatagories,
} from "../../adapters/searchRequests.js";
import Card from "../../components/Search/Card";
// import "../../components/home/Row.styles.css";
import "../../components/Home/Row.styles.css";
export default function SearchBody() {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [categories, setcategories] = useState([]);

  function throttle(time) {
    let timeout;
    return function (search) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        searchRequests(search)
          .then((res) => {
            setArtistsState(res);
            setAlbumState(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }, time);
    };
  }

  const betterSearch = useCallback(throttle(200), []);

  useEffect(() => {
    if (search.length === 0) {
      setAlbums([]);
      setArtists([]);
      return;
    }
    betterSearch(search);
  }, [search]);

  useEffect(() => {
    searchCatagories()
      .then((res) => {
        setcategories(
          res.categories.items?.map((item) => {
            return {
              id: item.id,
              name: item.name,
              image: item.icons[0],
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function setArtistsState(res) {
    setArtists(
      res.artists?.items?.map((artist) => {
        const smallestImage = artist.images.reduce((result, current) => {
          if (current.height < result.height) return current;
          return result;
        }, artist.images[0]);

        return {
          id: artist.id,
          name: artist.name,
          type: artist.type,
          image: smallestImage,
        };
      })
    );
  }

  function setAlbumState(res) {
    setAlbums(
      res.albums?.items?.map((album) => {
        const smallestImage = album.images.reduce((result, current) => {
          if (current.height < result.height) return current;
          return result;
        }, album.images[0]);

        return {
          id: album.id,
          name: album.name,
          type: album.type,
          image: smallestImage,
          artistName: album.artists[0].name,
        };
      })
    );
  }

  function handleChange(value) {
    setSearch(value);
  }

  function ArtistsRow() {
    return (
      <div className="row">
        <h2 className="row_title"> {artists.length ? "Artists" : ""}</h2>
        <div className="inner_row">
          {artists?.map((artist, index) => {
            return (
              <Card
                artist_name={artist.name}
                id={artist.id}
                image_url={artist?.image?.url}
                key={index}
                type={"artist"}
              />
            );
          })}
        </div>
      </div>
    );
  }

  function AlbumRow() {
    return (
      <div className="row">
        <h2 className="row_title"> {artists.length ? "Albums" : ""}</h2>
        <div className="inner_row">
          {albums?.map((album, index) => {
            return (
              <Card
                artist_name={album.name}
                id={album.id}
                image_url={album?.image?.url}
                key={index}
                desc={album.artistName}
                type={"album"}
              />
            );
          })}
        </div>
      </div>
    );
  }

  function ShowCategories() {
    return (
      <div className="row">
        <h2 className="row_title"> Browse All</h2>

        <div className="inner_row categories_row">
          {categories?.map((categorie, index) => {
            return (
              <Card
                artist_name={categorie.name}
                id={categorie.id}
                image_url={categorie?.image?.url}
                key={index}
                type={"category-playlists"}
              />
            );
          })}
        </div>
      </div>
    );
  }

  function searchBody() {
    return (
      <div className="searchBody">
        {search ? (
          <>
            <ArtistsRow />
            <AlbumRow />
          </>
        ) : (
          <ShowCategories />
        )}
        {/* <ArtistsRow />
         <AlbumRow />
        <ShowCategories /> */}
      </div>
    );
  }

  return (
    <Base>
      <TopBar SearchBar={SearchBar} onChange={handleChange} search={search} />
      {searchBody()}
    </Base>
  );
}
