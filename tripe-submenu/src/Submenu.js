import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [column, setColumn] = useState("col-2");
  useEffect(() => {
    setColumn("col-2");
    const { center, bottom } = location;
    const submenu = container.current;
    submenu.style.left = `${center}px;`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumn("col-3");
    }
    if (links.length > 3) {
      setColumn("col-4");
    }
  }, [page, links, location]);

  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${column}`}>
          {links.map((link, i) => {
            const { url, icon, label } = link;
            return (
              <a href={url} key={i}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};
export default Submenu;
