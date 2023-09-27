import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { RightSideBar } from "./RightSideBar";

export const Layout = ({ children }) => {
  return (
    <div className="w-12">
      <Header />
      <div className="flex justify-content-between layout">
        <Sidebar />

        {children}

        <RightSideBar />
      </div>
    </div>
  );
};
