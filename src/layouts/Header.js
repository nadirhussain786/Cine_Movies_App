import React, { useState } from "react";
// import { InputText } from "primereact/inputtext";
import { logo } from "../assets/images";
import { Button } from "primereact/button";
import "../assets/styles/styles.css";
import { LoginForm } from "../components/LoginForm";
import { Searchbar } from "../components/Searchbar";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";
import { items } from "../Constants/Constant";
import { useScreenWidth } from "../Hooks/ScreenWidthHook";

export const Header = () => {
  // rename to isLoginFormOpen, setIsLoginFormOpen
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const width = useScreenWidth();

  return (
    <div className="flex flex-row justify-content-between align-items-center px-3 py-2 mb-2 bg-color">
      <img
        src={logo}
        alt="logo"
        className="w-3rem h-3rem"
        
      />
      {width === 630 ? null : (
        <div className="flex flex-row align-items-center">
          <Searchbar />

          <Button
            label="Signup"
            className="h-2rem text-lg ml-3"
            onClick={() => setIsLoginFormOpen(true)}
          />
          <LoginForm
            isLoginFormOpen={isLoginFormOpen}
            setIsLoginFormOpen={setIsLoginFormOpen}
          />
        </div>
      )}
      <div className="card visibility">
        <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
      </div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <div className="flex flex-column aligns-items-center">
          <div>
            <Menu className="mb-2 menu-bar" model={items} />
          </div>
          <div className="text-center p-3 my-2 border-round-md rightSidebar-powered-devnode">
            <span>
              Powered by <strong>Devnodes</strong>
            </span>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
