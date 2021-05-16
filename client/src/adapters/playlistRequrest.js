import axios from "./axiosInstance";

export const getPlaylistDetails = (playlistId) => {
  if (!playlistId) return "playlist id not provided";
  return axios
    .get(`/playlists/${playlistId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
