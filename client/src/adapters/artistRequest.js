import axios from "./axiosInstance";

export const getArtistDetails = (artistId) => {
  if (!artistId) return "album id not provided";
  return axios
    .get(`/artists/${artistId}/`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArtistTopTracks = (artistId) => {
  if (!artistId) return "album id not provided";
  return axios
    .get(`/artists/${artistId}/top-tracks?market=es`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
