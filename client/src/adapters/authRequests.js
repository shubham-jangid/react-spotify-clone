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
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-read",
  "user-library-modify",
];

const redirectUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://spotify.shubhamjangid.in/";

export const AUTH_URL =
  "https://accounts.spotify.com/authorize" +
  "?response_type=code" +
  "&client_id=" +
  "334d4c8a77434a43933b31a11fcf0a56" +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent(redirectUrl);
