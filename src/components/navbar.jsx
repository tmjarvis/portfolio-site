import React from "react";
import logo from "../Logo_1_React_Blue_2.svg";
import "../components/navbar.sass";

const NavBar = (props) => {
  const { display, top } = props;
  var navbarClass = "Navbar-Top";
  if (display && !top) navbarClass = "Navbar";
  else if (!display) navbarClass = "Navbar-Hidden";

  console.log("Navbar rendered!");
  return (
    <div className="Navbar">
      <div className="NavSection1">
        <a href="/">
          <img src={logo} alt="logo" className="NavIcon" />
        </a>
      </div>
      <div className="NavSection2">
        <nav>
          <a href="/portfolio">Portfolio</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
