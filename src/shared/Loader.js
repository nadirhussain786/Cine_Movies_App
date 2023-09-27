import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export const Loader = () => {
  return (
    <div>
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="4"
        fill="var(--surface-ground)"
        animationDuration=".5s"
      />
    </div>
  );
};
