import { useState } from "react";
// init,action,reducer,dispatch
import Sidebar from "./Sidebar";
import Home from "./Home";
import React, { useContext } from "react";
function App() {
  return (
    <>
      <Home />
      <Sidebar />
    </>
  );
}

export default App;
