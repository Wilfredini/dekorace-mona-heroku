import React from "react";

function Footer() {
  return (
    <div className="footer pt-sm-5 pt-3">
      <nav className="footer-nav">
        <ul className="footer-menu text-light text-center">
          <li className="nav-item py-3">
            <a href="/Home">Domů</a>
          </li>
          <li className="nav-item py-3">
            <a href="/About">O mně</a>
          </li>
          <li className="nav-item py-3">
            <a href="/Services">Služby</a>
          </li>
          <li className="nav-item py-3">
            <a href="/Gallery">Galerie</a>
          </li>
          <li className="nav-item py-3">
            <a href="/Contact">Kontakt</a>
          </li>
          <li className="nav-item py-3">
            <a href="/Login">Přihlásit</a>
          </li>
        </ul>
      </nav>
      <p className="copyright">© Charvát Tomáš 2022</p>
    </div>
  );
}

export default Footer;
