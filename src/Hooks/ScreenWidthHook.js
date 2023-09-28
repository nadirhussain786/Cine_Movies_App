import { useEffect, useState } from "react";

export const useScreenWidth = (screenSize) => {
  const [width, setWidth] = useState(window.innerWidth || 0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return width <= screenSize;

};
