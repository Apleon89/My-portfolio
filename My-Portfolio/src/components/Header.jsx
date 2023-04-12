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
        <Link to="https://www.linkedin.com/in/apleon89/" target="_blank">
          Linkedin
        </Link>
        <Link to="https://github.com/Apleon89" target="_blank">
          Github
        </Link>
        <Link
          to="https://1drv.ms/b/s!Asgw2DpLnj0MlLNMs0P3-xI-N64gKA?e=wWSW2a"
          target="_blank"
        >
          CV
        </Link>
        <button>Contacto</button>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dacltsvln/image/upload/v1680017651/re-Usa/ohbjquwjm4ptqldykd5z.jpg"
          alt="imagen perfil"
          width={"300px"}
        />
      </div>
    </header>
  );
}

export default Header;
