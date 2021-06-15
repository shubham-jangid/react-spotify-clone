import axios from "./axiosInstance";

export const getPlaylistDetails = (playlistId) => {
  if (!playlistId) {
    console.log("playlist id not provided");
    return;
  }
  return axios
    .get(`/playlists/${playlistId}`)
    .then((res) => {
      console.log(res);

      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
