import axios from "axios";
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

export const AUTH_URL =
  "https://accounts.spotify.com/authorize" +
  "?response_type=code" +
  "&client_id=" +
  "334d4c8a77434a43933b31a11fcf0a56" +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent("http://localhost:3000/");

export function login(code) {
  return axios
    .post("http://localhost:3001/login", { code })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}