import axios from "./axiosInstance";

export const searchRequests = (search) => {
  return axios
    .get(`search?q=${search}&type=track%2Cartist%2Calbum&limit=10`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchCatagories = () => {
  return axios
    .get("browse/categories?country=in")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
