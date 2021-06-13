import React, { useEffect } from "react";
import logo from "../../assets/Spotify_Logo_RGB_White.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOptions from "./SideBarOptions";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getUserPlaylists } from "../../adapters/userDetails";
import "./sideBar.styles.css";
import { useStateValues } from "../../contexts/StateProvider";
import { Link } from "react-router-dom";
import { setRequestHeader } from "../../adapters/axiosInstance";
import useAuth from "../../adapters/useAuth";
import axios from "axios";
const code = new URLSearchParams(window.location.search).get("code");
export default function SideBar() {
  useAuth(code);
  const [
    { user_playlists, access_token, refresh_token },
    dispatch,
  ] = useStateValues();

  useEffect(() => {
    if (!access_token) return;
    setRequestHeader(access_token);
    getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type: "SET_USER_PLAYLISTS",
          user_playlists: playlists.items,
        });
      })
      .catch((err) => {
        axios
          .post("http://localhost:3001/refreshtoken", { refresh_token })
          .then((res) => {
            dispatch({
              type: "SET_ACCESS_TOKEN",
              access_token: res.data.access_token,
            });

            dispatch({
              type: "SET_EXPIRES_IN",
              expires_in: res.data.expires_in,
            });

            window.history.pushState({}, null, "/");
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("expires_in", res.data.expires_in);
          })
          .catch((error) => {
            console.log(error);
            window.location = "/";
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("expires_in");
          });
      });
  }, [access_token, JSON.stringify(user_playlists)]); // eslint-disable-line react-hooks/exhaustive-deps

  var ConditionalLink = access_token ? Link : "div";

  return (
    <div className="sideBar">
      <Link to="/">
        <img className="sideBar_logo" src={`${logo}`} alt="logo" />
      </Link>
      <Link to="/">
        <SideBarOptions title="Home" Icon={HomeIcon} />
      </Link>
      <Link to="/search">
        <SideBarOptions title="Search" Icon={SearchIcon} />
      </Link>
      <ConditionalLink to="/collection/playlists">
        <SideBarOptions
          title="Your Library"
          Icon={LibraryMusicIcon}
          popupHeading="Enjoy Your Library"
          popupDetail="Log in to see saved songs, podcasts, artists, and playlists in Your Library."
        />
      </ConditionalLink>
      <br />
      <SideBarOptions
        title="Create Playlist"
        Icon={PlaylistAddIcon}
        popupHeading="Create a playlist"
        popupDetail="Log in to create and share playlists."
      />
      <SideBarOptions
        title="Liked Songs"
        Icon={FavoriteIcon}
        popupHeading="Enjoy your Liked Songs"
        popupDetail="Log in to see all the songs you’ve liked in one easy playlist."
      />
      <hr />
      {user_playlists?.map((playlist, index) => (
        <SideBarOptions title={playlist.name} id={playlist.id} key={index} />
      ))}
    </div>
  );
}
