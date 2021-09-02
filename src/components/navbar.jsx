import React from "react";
import logo from "../images/Logo_Space.svg";
import hamburgerMenu from "../images/Hamburger-Menu-White.svg";
import "../components/navbar.sass";
import { useState } from "react";
import NavOverlay from "./navOverlay";

const NavBar = (props) => {
  const { display, top } = props;
  var navbarClass = "Navbar-Top";
  if (display && !top) navbarClass = "Navbar";
  else if (!display) navbarClass = "Navbar-Hidden";

  const currentPage = window.location.pathname;

  let navLinks = [];
  let mobileNavLinks = [];
  const pages = ["/portfolio", "/about", "/contact", "/resume"];

  pages.forEach((page) => {
    let pageName = page.substring(1).charAt(0).toUpperCase() + page.slice(2);
    let linkClass = "";
    if (currentPage === page) linkClass = "ActiveLink";
    navLinks.push(
      <a href={page} className={linkClass}>
        {pageName}
      </a>
    );
    mobileNavLinks.push({
      page: pageName,
      link: page,
      active: linkClass ? true : false,
    });
  });

  let [menuOpen, setMenuOpen] = useState("Menu-Closed");

  const handleClick = () => {
    if (menuOpen === "Menu-Closed") setMenuOpen("Menu-Open");
    else setMenuOpen("Menu-Closed");
  };

  return (
    <div className={navbarClass}>
      <div className="NavSection1">
        <a href="/">
          <img src={logo} alt="logo" className="HomeIcon" />
        </a>
      </div>
      <div className="NavSection2">
        <nav>{navLinks}</nav>
      </div>
      <div className="Menu-Parent-Div">
        <img
          className="Hamburger-Menu"
          onClick={() => handleClick()}
          src={hamburgerMenu}
          alt="Menu"
        />
      </div>
      <NavOverlay menuOpen={menuOpen} navLinks={mobileNavLinks} />
    </div>
  );
};

export default NavBar;
