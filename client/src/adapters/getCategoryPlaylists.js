import axios from "./axiosInstance";

export const getCategoryPlaylists = (categoryId, limit) => {
  console.log(categoryId);
  let url = "";
  if (!categoryId) {
    console.log("category id not provided");
    return;
  }
  if (limit) {
    url = `/browse/categories/${categoryId}/playlists?limit=${limit}`;
  } else {
    url = `/browse/categories/${categoryId}/playlists`;
  }
  return axios
    .get(`${url}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
