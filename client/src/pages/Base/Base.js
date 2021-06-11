import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./Base.css";
import Footer from "../../components/Footer/Footer";
import { useStateValues } from "../../contexts/StateProvider";
import { setRequestHeader } from "../../adapters/axiosInstance";
import Player from "../../components/Player/Player";

export default function Base({ children }) {
  const [{ access_token }] = useStateValues();

  useEffect(() => {
    if (!access_token) return;
    setRequestHeader(access_token);
  }, [access_token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="base">
      <SideBar />
      {children}
      {access_token ? <Player access_token={access_token} /> : <Footer />}
    </div>
  );
}
