import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar />
      <div>
        <h2>
          Alberto Pérez<span>.</span>
        </h2>
        <hr />
        <Link to="https://www.linkedin.com/in/apleon89/">Linkedin</Link>
        <Link to="https://1drv.ms/b/s!Asgw2DpLnj0MlLNMs0P3-xI-N64gKA?e=wWSW2a">
          CV
        </Link>
        <button>Contacto</button>
      </div>
      <div>
        <img src="" alt="imagen perfil" />
      </div>
    </header>
  );
}

export default Header;
