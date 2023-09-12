import "./Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-color">
      <div className="burger-menu">
        <div
          className={`burger-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {" "}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {menuOpen && (
          <div className="menu-content">
            <ul className="navbar_links">
              <li>
                <Link to="/presentation" className="navbar_link">
                  Présentation
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/competences" className="navbar_link">
                  Compétences{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="experiences" className="navbar_link">
                  Expériences Professionelles{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="formations" className="navbar_link">
                  Formations{" "}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
