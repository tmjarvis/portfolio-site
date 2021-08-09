import React from "react";
import logo from "../Logo_1_React_Blue_2.svg";
import "../components/navbar.sass";

const NavBar = (props) => {
  const { display, top } = props;
  var navbarClass = "Navbar-Top";
  if (display && !top) navbarClass = "Navbar";
  else if (!display) navbarClass = "Navbar-Hidden";

  const currentPage = window.location.pathname;

  let navLinks = [];
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
  });

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
    </div>
  );
};

export default NavBar;
