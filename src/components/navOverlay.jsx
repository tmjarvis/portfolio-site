import React from "react";

const NavOverlay = (props) => {
  let navs = [];
  props.navLinks.forEach((link) => {
    let linkClass = "Hamburger-Item";
    if (link.active) linkClass = "Hamburger-Item-Active";
    navs.push(
      <a href={link.link} style={{ textDecoration: "none" }}>
        <div className={linkClass}>
          <p>
            <code>{link.page}</code>
          </p>
        </div>
      </a>
    );
  });
  return <div className={props.menuOpen}>{navs}</div>;
};

export default NavOverlay;
