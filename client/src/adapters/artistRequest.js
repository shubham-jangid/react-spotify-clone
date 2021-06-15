import axios from "./axiosInstance";

export const getArtistDetails = (artistId) => {
  if (!artistId) {
    console.log("album id not provided");
    return;
  }
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
  if (!artistId) {
    console.log("album id not provided");
    return;
  }
  return axios
    .get(`/artists/${artistId}/top-tracks?market=es`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
