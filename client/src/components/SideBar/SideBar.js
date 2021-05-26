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
const code = new URLSearchParams(window.location.search).get("code");
export default function SideBar() {
  useAuth(code);
  const [{ user_playlists, access_token }, dispatch] = useStateValues();

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
        console.log(err);
      });
  }, [access_token, JSON.stringify(user_playlists)]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="sideBar">
      <img className="sideBar_logo" src={`${logo}`} alt="logo" />
      <Link to="/">
        <SideBarOptions title="Home" Icon={HomeIcon} />
      </Link>
      <SideBarOptions title="Search" Icon={SearchIcon} />
      <SideBarOptions title="Your Livrary" Icon={LibraryMusicIcon} />
      <br />
      <SideBarOptions title="Create Playlist" Icon={PlaylistAddIcon} />
      <SideBarOptions title="Liked Songs" Icon={FavoriteIcon} />
      <hr />
      {user_playlists?.map((playlist, index) => (
        <SideBarOptions title={playlist.name} id={playlist.id} key={index} />
      ))}
    </div>
  );
}
