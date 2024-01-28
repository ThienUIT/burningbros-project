import { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
  const desktopScreen = 768;
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= desktopScreen;
};

export default useCheckMobileScreen;
