import axios from "./axiosInstance";

export default function getUserProfile() {
  return axios
    .get("/me")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getUserPlaylists() {
  return axios
    .get("me/playlists")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
