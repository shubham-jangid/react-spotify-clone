import axios from "./axiosInstance";

export const getAlbumDetails = (albumId) => {
  if (!albumId) return "album id not provided";
  return axios
    .get(`/albums/${albumId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
