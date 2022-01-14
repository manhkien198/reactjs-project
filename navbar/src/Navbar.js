import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import { links, social } from "./data";

const Navbar = () => {
  const [showLink, setShowLink] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLink(!showLink);
  };
  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
    if (showLink) {
      linksContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
    console.log(showLink, linkHeight);
  }, [showLink]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" className="link-item">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="social">
              {social.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" className="social-item">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
