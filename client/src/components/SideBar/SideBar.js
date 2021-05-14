import React, { useEffect } from "react";
import logo from "../../assets/Spotify_Logo_RGB_White.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SideBarOptions from "./SideBarOptions";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { spotifyApi } from "../../adapters/spotifyApi";
import "./sideBar.styles.css";
import { useStateValues } from "../../contexts/StateProvider";

export default function SideBar() {
  const [{ user_playlists, isTokenSet }, dispatch] = useStateValues();
  useEffect(() => {
    if (!isTokenSet) return;
    spotifyApi
      .getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type: "SET_USER_PLAYLISTS",
          user_playlists: playlists.items,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [isTokenSet]);

  return (
    <div className="sideBar">
      <img className="sideBar_logo" src={`${logo}`} alt="logo" />
      <SideBarOptions title="Home" Icon={HomeIcon} />
      <SideBarOptions title="Search" Icon={SearchIcon} />
      <SideBarOptions title="Your Livrary" Icon={LibraryMusicIcon} />
      <br />
      <SideBarOptions title="Create Playlist" Icon={PlaylistAddIcon} />
      <SideBarOptions title="Liked Songs" Icon={FavoriteIcon} />
      <hr />
      {user_playlists?.map((playlist, index) => (
        <SideBarOptions title={playlist.name} id={playlist.id} index={index} />
      ))}
    </div>
  );
}
