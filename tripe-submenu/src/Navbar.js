import React from "react";
import logo from "./logo.svg";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu = (page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("links-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <button className="links-btn" onMouseOver={displaySubmenu}>
              Products
            </button>
          </li>
          <li>
            <button className="links-btn" onMouseOver={displaySubmenu}>
              Developers
            </button>
          </li>
          <li>
            <button className="links-btn" onMouseOver={displaySubmenu}>
              Company
            </button>
          </li>
        </ul>
        <button className="btn btn-sign-in">Sign in</button>
      </div>
    </nav>
  );
};
export default Navbar;
