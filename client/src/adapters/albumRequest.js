import axios from "./axiosInstance";

export const getAlbumDetails = (albumId) => {
  if (!albumId) {
    console.log("album id not provided");
    return;
  }
  return axios
    .get(`/albums/${albumId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
