import axios from "./axiosInstance";

export const getTrackDetails = (trackId) => {
  if (!trackId) {
    console.log("track id not provided");
    return;
  }
  return axios
    .get(`/tracks/${trackId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
