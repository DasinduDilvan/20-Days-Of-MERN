import React from "react";
import Menulink from "../Menulink/Menulink";
import './Navbar.css';

function Navbar() {
  return (
    <>
    <div class="navbar">
        <div class="nav-logo">
            <a href="#">BrandLogo</a>
        </div>
        <Menulink linkname="Home" url="#home" />
        <Menulink linkname="About" url="#about" />
        <Menulink linkname="Services" url="#services" />
        <Menulink linkname="Contact" url="#contact" />
    </div>
    </>
  );
}

export default Navbar;