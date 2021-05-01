import React, { useEffect } from "react";
import useAuth from "../adapters/useAuth";
import { useStateValues } from "../contexts/StateProvider";
var scopes = "user-read-private user-read-email";

const AUTH_URL =
  "https://accounts.spotify.com/authorize" +
  "?response_type=code" +
  "&client_id=" +
  "334d4c8a77434a43933b31a11fcf0a56" +
  (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
  "&redirect_uri=" +
  encodeURIComponent("http://localhost:3000/");

export default function Login() {
  const [{ user, code, token }, dispatch] = useStateValues();

  useEffect(() => {
    console.log(code);
  }, [code]);

  useEffect(() => {
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if (urlCode) {
      dispatch({
        type: "SET_CODE",
        code: urlCode,
      });
    }
    console.log(urlCode);
  }, []);

  // code ? useAuth(code) : console.log("no code");

  return <a href={AUTH_URL}> LOGIN</a>;
}
