import axios from "./axiosInstance";

export function getSongs({ url, limit, id }) {
  if (id) {
    url = `/playlists/${id}`;
  }
  return axios
    .get(`${url}?limit=${limit}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
