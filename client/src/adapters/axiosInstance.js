import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const setRequestHeader = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default instance;
