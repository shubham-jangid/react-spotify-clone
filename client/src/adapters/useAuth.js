import { useEffect } from "react";
import axios from "axios";
import { useStateValues } from "../contexts/StateProvider";
import { setRequestHeader } from "./axiosInstance";

export default function useAuth(code) {
  const [
    { access_token, expires_in, refresh_token },
    dispatch,
  ] = useStateValues();

  const serverUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:30001/"
      : "https://react-spotify-clone-server.herokuapp.com/";

  useEffect(() => {
    if (code) {
      if (access_token) return;
      axios
        .post(`${serverUrl}login`, { code })
        .then((res) => {
          dispatch({
            type: "SET_ACCESS_TOKEN",
            access_token: res.data.access_token,
          });
          dispatch({
            type: "SET_REFRESH_TOKEN",
            refresh_token: res.data.refresh_token,
          });

          dispatch({
            type: "SET_EXPIRES_IN",
            expires_in: res.data.expires_in,
          });

          window.history.pushState({}, null, "/");
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          localStorage.setItem("expires_in", res.data.expires_in);
          setRequestHeader(res.data.access_token);
        })
        .catch((err) => {
          window.location = "/";
          alert(err);
        });
    }
  }, [code]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (access_token) return;
    const accessToken = localStorage.getItem("access_token");
    const refreshTtoken = localStorage.getItem("refresh_token");
    const expiresIn = localStorage.getItem("expires_in");

    if (accessToken) {
      setRequestHeader(accessToken);
      dispatch({
        type: "SET_ACCESS_TOKEN",
        access_token: accessToken,
      });
    }

    if (refreshTtoken) {
      dispatch({
        type: "SET_REFRESH_TOKEN",
        refresh_token: refreshTtoken,
      });
    }

    if (expiresIn) {
      dispatch({
        type: "SET_EXPIRES_IN",
        expires_in: expiresIn,
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return;
}
