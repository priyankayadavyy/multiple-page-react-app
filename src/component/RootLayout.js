import React from "react";
import MainNav from "./MainNav";
import { Outlet } from "react-router-dom";
import Home from "./Home";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
      <Home />
    </>
  );
};

export default RootLayout;
