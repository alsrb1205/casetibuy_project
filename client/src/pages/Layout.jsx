import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

export default function Layout() {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
