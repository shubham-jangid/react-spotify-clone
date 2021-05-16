import axios from "./axiosInstance";

export function getSongs({ url }) {
  return axios
    .get(`${url}`)
    .then((res) => {
      console.log(res);
      return res.data.playlists;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
