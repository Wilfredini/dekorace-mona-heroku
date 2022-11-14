import React from "react";
import logo from "../../images/logo1.svg";
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { AiFillAliwangwang } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { FaRegAddressBook } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

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
            <a href="/Home">
              <HiHome />
              Domů
            </a>
          </li>
          <li className="nav-item">
            <a href="/About">
              <AiFillAliwangwang />O mně
            </a>
          </li>
          <li className="nav-item">
            <a href="/Services">
              <FaRegHandshake />
              Služby
            </a>
          </li>
          <li className="nav-item">
            <a href="/Gallery">
              <GiFlowerPot />
              Galerie
            </a>
          </li>
          <li className="nav-item">
            <a href="/Contact">
              <FaRegAddressBook />
              Kontakt
            </a>
          </li>
          <li className="nav-item">
            <a href="/Login">
              <FaUserCircle />
              Přihlásit
            </a>
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
