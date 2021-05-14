import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/",
});

instance.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  // Important: request interceptors **must** return the request.
  return req;
});

export const setRequestHeader = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default instance;
