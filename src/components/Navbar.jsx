import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import { CSSTransition } from "react-transition-group";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav id="navbar">
      <div id="navbar-container">
        <h2>
          AP<span>.</span>
        </h2>
        <button onClick={() => setShowMenu(!showMenu)} id="btn-nav">
          <UseAnimations animation={menu2} size={35} />
        </button>
      </div>
      {showMenu && (
        <div id="navbar-mobile-menu">
          <a href="#header">Inicio</a>
          <a href="#about-me">Sobre mi</a>
          <a href="#skills">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
