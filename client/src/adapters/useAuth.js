import React, { useEffect } from "react";
import axios from "axios";
import { useStateValues } from "../contexts/StateProvider";
import { setRequestHeader } from "./axiosInstance";

export default function useAuth(code) {
  const [{ access_token }, dispatch] = useStateValues();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setRequestHeader(token);
      dispatch({
        type: "SET_ACCESS_TOKEN",
        access_token: token,
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (code) {
      if (access_token) return;
      axios
        .post("http://localhost:3001/login", { code })
        .then((res) => {
          dispatch({
            type: "SET_ACCESS_TOKEN",
            access_token: res.data.access_token,
          });
          dispatch({
            type: "SET_REFRESH_TOKEN",
            refresh_token: res.data.refresh_token,
          });
          window.history.pushState({}, null, "/");
          setRequestHeader(res.data.access_token);
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
        })
        .catch((err) => {
          window.location = "/";
          alert(err);
        });
    }
  }, [code]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div></div>;
}
