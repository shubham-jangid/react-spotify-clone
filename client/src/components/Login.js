import React, { useEffect } from "react";
import { useStateValues } from "../contexts/stateProvider";
import axios from "axios";
import { spotifyApi } from "../adapters/spotifyApi";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-private",
  "user-read-playback-position",
  "user-read-email",
  "user-library-read",
  "user-library-modify",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
];

const AUTH_URL =
  "https://accounts.spotify.com/authorize" +
  "?response_type=code" +
  "&client_id=" +
  "334d4c8a77434a43933b31a11fcf0a56" +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent("http://localhost:3000/");

export default function Login() {
  const [{ code, access_token }, dispatch] = useStateValues();

  useEffect(() => {
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if (urlCode) {
      dispatch({
        type: "SET_CODE",
        code: urlCode,
      });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      dispatch({
        type: "SET_ACCESS_TOKEN",
        access_token: token,
      });
      spotifyApi.setAccessToken(token);
    } else if (code) {
      axios
        .post("http://localhost:3001/login", { code })
        .then((res) => {
          dispatch({
            type: "SET_ACCESS_TOKEN",
            access_token: res.data.access_token,
          });
          dispatch({
            type: "SET_REFRESH_TOKEN",
            refresh_token: res.data.refresh_token,
          });
          // localStorage.setItem("access_token", res.data.access_token);
          // localStorage.setItem("refresh_token", res.data.refresh_token);
          window.history.pushState({}, null, "/");

          spotifyApi.setAccessToken(res.data.access_token);
        })
        .catch((error) => {
          window.location = "/";
          console.log(error);

          alert(error);
        });
    }
  }, [code, access_token]);

  return <a href={AUTH_URL}> LOGIN</a>;
}
