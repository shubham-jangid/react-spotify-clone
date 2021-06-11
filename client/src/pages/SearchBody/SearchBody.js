import React, { useEffect } from "react";
import Base from "../Base/Base";
import "./SearchBody.styles.css";
import { useState } from "react";
import { TopBar } from "../../components/TopBar";
import SearchBar from "../../components/TopBar/SearchBar.";
import { searchRequests } from "../../adapters/searchRequests.js";
import Card from "../../components/Search/Card";
// import "../../components/home/Row.styles.css";
import "../../components/Home/Row.styles.css";
export default function SearchBody() {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (search.length === 0) {
      setAlbums([]);
      setArtists([]);
      return;
    }
    let cancel = false;

    searchRequests(search)
      .then((res) => {
        if (cancel) return;
        console.log(res);

        setArtistsState(res);
        setAlbumState(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => (cancel = true);
  }, [search]);

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
                artistName={artist.name}
                id={artist.id}
                imageUrl={artist?.image?.url}
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
                artistName={album.name}
                id={album.id}
                imageUrl={album?.image?.url}
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

  function searchBody() {
    return (
      <div className="searchBody">
        <ArtistsRow />
        <AlbumRow />
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
