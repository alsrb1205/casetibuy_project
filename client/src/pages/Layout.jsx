import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

export default function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="relative">
      <Header />
      <Outlet />
      {!isLoginPage && <Footer />}
    </div>
  );
}