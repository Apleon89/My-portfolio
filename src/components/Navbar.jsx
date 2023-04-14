import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>
        AP<span>.</span>
      </h2>
      <div>
        <a href="#header">Inicio</a>
        <a href='#about-me'>Sobre mi</a>
        <a href="#skills">Skills</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
