import { useState, useEffect } from "react";
import { applyTheme, getSavedTheme } from "../utils/themeUtils";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getSavedTheme());

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    applyTheme(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};
