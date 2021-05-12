import React from "react";
import SideBar from "../components/SideBar/SideBar";
import "../styles/Pages/Base.css";
import Footer from "../components/Footer";
import { TopBar } from "../components/TopBar/";
import useApiCalls from "../adapters/useApiCalls";

export default function Base({ children }) {
  useApiCalls();
  return (
    <div className="base">
      <SideBar />
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}
