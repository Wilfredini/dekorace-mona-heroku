import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../images/logo1.svg";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav ref={navRef}>
        <ul className="nav-menu ">
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
            <a href="/register">Přihlásit</a>
          </li>
          <li className="nav-item">
            <a href="/Register">
              <FaRegUserCircle />
            </a>
          </li>
        </ul>
      </nav>
      <div onClick={showNavbar} className="nav-toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}

export default Navbar;
