import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import "./Base.css";
import Footer from "../components/Footer/Footer";
import { TopBar } from "../components/TopBar/";
import { useStateValues } from "../contexts/StateProvider";
import { spotifyApi } from "../adapters/spotifyApi";
import { setRequestHeader } from "../adapters/axiosInstance";

export default function Base({ children }) {
  const [{ access_token }, dispatch] = useStateValues();

  useEffect(() => {
    if (!access_token) return;
    spotifyApi.setAccessToken(access_token);
    setRequestHeader(access_token);

    dispatch({
      type: "IS_TOKEN_SET",
      isTokenSet: true,
    });
  }, [access_token]);

  return (
    <div className="base">
      <SideBar />
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}
