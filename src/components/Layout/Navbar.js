import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../images/logo1.svg";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const [toggleBtn, setToggleBtn] = useState("line");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");

    toggleBtn === "line" ? setToggleBtn("line toggle") : setToggleBtn("line");
  };
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul className={active}>
          <li className="nav-item">
            <a href="/Home">Domů</a>
          </li>
          <li className="nav-item">
            <a href="/About">O mně</a>
          </li>
          <li className="nav-item">
            <a href="/Services">Služby</a>
          </li>
          <li className="nav-item">
            <a href="/Products">Produkty</a>
          </li>
          <li className="nav-item">
            <a href="/Contact">Kontakt</a>
          </li>
          <li className="nav-item">
            <a href="/Login">Přihlásit</a>
          </li>
        </ul>
      </nav>
      <div onClick={navToggle} className={toggleIcon}>
        <div className={toggleBtn}></div>
        <div className={toggleBtn}></div>
        <div className={toggleBtn}></div>
      </div>
    </header>
  );
}

export default Navbar;
