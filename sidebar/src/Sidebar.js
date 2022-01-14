import { useGlobalContext } from "./Context";
import React from "react";
import logo from "./logo.svg";
import {
  FaTimes,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendar,
  FaEnvelopeOpenText,
} from "react-icons/fa";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <button className="btn-close" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="list">
        <li className="list-item">
          <a href="">
            <span className="icon">
              {" "}
              <FaHome />
            </span>
            Home
          </a>
        </li>
        <li className="list-item">
          <a href="">
            <span className="icon">
              <FaUserFriends />
            </span>
            Team
          </a>
        </li>
        <li className="list-item">
          <a href="">
            <span className="icon">
              <FaFolderOpen />
            </span>
            Project
          </a>
        </li>
        <li className="list-item">
          <a href="">
            <span className="icon">
              <FaCalendar />
            </span>
            Calendar
          </a>
        </li>
        <li className="list-item">
          <a href="">
            <span className="icon">
              <FaEnvelopeOpenText />
            </span>
            Document
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
