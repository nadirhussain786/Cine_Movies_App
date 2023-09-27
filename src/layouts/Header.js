import React, { useState } from "react";
// import { InputText } from "primereact/inputtext";
import { logo } from "../assets/images";
import { Button } from "primereact/button";
import "../assets/styles/styles.css";
import { LoginForm } from "../components/LoginForm";
import { Searchbar } from "../components/Searchbar";
import { Sidebar } from "primereact/sidebar";
import { Menu } from 'primereact/menu';
import { items } from "../Constants/Constant";

export const Header = () => {
  // rename to isLoginFormOpen, setIsLoginFormOpen
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <div className="flex flex-row justify-content-between align-items-center px-3 py-2 mb-2 bg-color">
      <img
        src={logo}
        alt="logo"
        className="w-3rem h-3rem"
        style={{ background: "tansparent" }}
      />
      <div className="flex flex-row align-items-center display-none">
        {/**   <span className="p-input-icon-left text-white">
          <i className="pi pi-search text-lg text-white" />
          <InputText placeholder="Search" className="input-search h-2rem" />
        </span>  */}

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
      <div className="card visibility">
      <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
      </div>
      <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <div className="flex flex-column aligns-items-center" >
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
