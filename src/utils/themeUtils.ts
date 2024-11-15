export const applyTheme = (isDarkMode: boolean) => {
  document.body.classList.toggle("dark-mode", isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

export const getSavedTheme = (): boolean => {
  return localStorage.getItem("theme") === "dark";
};
