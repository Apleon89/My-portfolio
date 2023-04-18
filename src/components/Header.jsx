import React from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header id="header">
      <Navbar />
      <div id="header-container">
        <div id="header-name-links">
          <h2>
            Alberto Pérez<span>.</span>
          </h2>
          <hr />
          <div id="header-links">
            <Link to="https://www.linkedin.com/in/apleon89/" target="_blank">
              Linkedin
            </Link>
            <p>|</p>
            <Link to="https://github.com/Apleon89" target="_blank">
              Github
            </Link>
          </div>
          <Link id="cv-link"
            to="https://1drv.ms/b/s!Asgw2DpLnj0MlLNMs0P3-xI-N64gKA?e=wWSW2a"
            target="_blank"
          >
            CV
          </Link>
          <a href="#contacto">
            <button className="btn" id="btn-contacto-header">
              CONTACTO
            </button>
          </a>
        </div>
        <div id="header-img">
          <img
            src="https://res.cloudinary.com/dacltsvln/image/upload/v1681574580/Snapseed.orf_jijvti.jpg"
            alt="imagen perfil"
            width={"300px"}
          />
        </div>
        <div id="intro-header">
          <h4>Introducción</h4>
          <h2>Full Stack Web Developer</h2>
          <p>
            JavaScript | ReactJs <br />Vite | NodeJs | MongoDB <br /> Axios | CSS |
            TailwindCSS Bootstrap | HTML5 <br /> Git | Github
          </p>
          <a href="#about-me">Más sobre mí ↓</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
