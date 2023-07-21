import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { navLinks } from "./navlinks";

const Layout = () => {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
