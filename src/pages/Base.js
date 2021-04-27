import React from "react";
import SideBar from "../components/SideBar";
import "../styles/Pages/Base.css";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

export default function Base({ children }) {
  return (
    <div className="base">
      <SideBar />
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}
