import axios from "./axiosInstance";

export const getTrackDetails = (trackId) => {
  if (!trackId) return "playlist id not provided";
  return axios
    .get(`/tracks/${trackId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
