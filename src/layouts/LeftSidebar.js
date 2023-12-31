import React from "react";
import { Menu } from "primereact/menu";
import { items } from "../Constants/Constant";
import "../assets/styles/styles.css";
import { useScreenWidth } from "../Hooks/ScreenWidthHook";

export const Sidebar = () => {
  const width = useScreenWidth(630);
  return width ? null : (
    <div className="w-3">
      <div className="flex flex-column align-items-center">
        <Menu className="mb-2 menu-bar" model={items} />
        <div className="text-center p-3 my-2 border-round-md powered-devnode">
          <span>
            Powered by <strong>Nadir Hussain</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
