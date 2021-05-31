import axios from "./axiosInstance";

export function getSongs({ url }) {
  return axios
    .get(`${url}?limit=20`)
    .then((res) => {
      return res.data.playlists.items;
    })
    .catch((err) => {
      console.log(err);
    });
}
