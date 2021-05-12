import React from "react";
import logo from "../../assets/Spotify_Logo_RGB_White.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOptions from "./SideBarOptions";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "../../styles/components/sideBar.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <img className="sideBar_logo" src={`${logo}`} alt="logo" />
      <SideBarOptions title="Home" Icon={HomeIcon} />
      <SideBarOptions title="Search" Icon={SearchIcon} />
      <SideBarOptions title="Your Livrary" Icon={LibraryMusicIcon} />
      <br />
      <SideBarOptions title="Create Playlist" Icon={PlaylistAddIcon} />
      <SideBarOptions title="Liked Songs" Icon={FavoriteIcon} />
    </div>
  );
}
