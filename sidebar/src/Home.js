import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import React from "react";
const Home = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <main>
      <button className="menu" onClick={openSidebar}>
        <FaBars />
      </button>
    </main>
  );
};

export default Home;
