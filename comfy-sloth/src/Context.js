import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [prodPerPage, setProdPerPage] = useState(6);
  const [showCart, setShowCart] = useState(false);
  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        isFilter,
        setIsFilter,
        dataFilter,
        setDataFilter,
        currPage,
        setCurrPage,
        prodPerPage,
        setProdPerPage,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
