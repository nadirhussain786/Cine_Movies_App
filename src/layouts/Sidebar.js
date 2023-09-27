import React from "react";
import { Menu } from "primereact/menu";
import { items } from "../Constants/Constant";
import "../assets/styles/styles.css";

export const Sidebar = () => {
  return (
    <div className="flex flex-column aligns-items-center display-none ml-3" >
      <div>
        <Menu className="mb-2 menu-bar" model={items} />
      </div>
      <div className="text-center p-3 my-2 border-round-md powered-devnode">
        <span>
          Powered by <strong>Devnodes</strong>
        </span>
      </div>
    </div>
  );
};
