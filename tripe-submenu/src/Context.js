import React, { useState, useContext } from "react";
import sublinks from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const openSubmenu = (text, coordinate) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(text);
    setLocation(coordinate);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSubmenuOpen, openSubmenu, closeSubmenu, location, page }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
