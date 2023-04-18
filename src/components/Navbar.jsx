import { useState } from "react";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu";
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
          <UseAnimations animation={menu} size={35} />
        </button>
      </div>
      <div className={`animacion-colapso ${showMenu ? "" : "colapsado"}`}>
        {showMenu && (
          <div id="navbar-mobile-menu">
            <a href="#header">Inicio</a>
            <a href="#about-me">Sobre mi</a>
            <a href="#skills">Skills</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
