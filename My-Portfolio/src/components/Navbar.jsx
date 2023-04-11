import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>
        AP<span>.</span>
      </h2>
      <div>
        <NavLink>Inicio</NavLink>
        <NavLink>Sobre mi</NavLink>
        <NavLink>Proyectos</NavLink>
        <NavLink>Contacto</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
