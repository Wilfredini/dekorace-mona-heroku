import React from "react";

function Footer() {
  return (
    <div className="footer pt-sm-5 pt-3">
      <nav className="footer-nav">
        <ul className="footer-menu text-light text-center">
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
      <p className="copyright">© Charvát Tomáš 2022</p>
    </div>
  );
}

export default Footer;
