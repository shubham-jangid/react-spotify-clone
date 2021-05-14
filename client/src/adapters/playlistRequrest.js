import axios from "axios";

export const getPlaylistDetails = (playlistId) => {
  if (!playlistId) return "playlist id not provided";
  console.log(`${playlistId}`);
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  const token = localStorage.getItem("access_token");
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
