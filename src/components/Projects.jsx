import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <section id="proyectos">
      <h4>Proyectos</h4>
      <h2>Últimos trabajos</h2>
      <div id="allProjects-container">
        <div className="project-container">
          <img
            src="https://res.cloudinary.com/dacltsvln/image/upload/v1681284510/Logo_Re-Usa_x6tfey.png"
            alt="logo app"
            width={"200px"}
          />
          <h3>Re-Usa</h3>
          <p>
            Aplicación MERN Stack de intercambio de productos de segundamano.
          </p>
          <p>MongoDB | ExpressJS | ReactJS | NodeJS | CSS3</p>
          <Link to="https://re-usa.netlify.app/" target="_blank">
            <button className="btn">Visitar la web</button>
          </Link>
          <div>
            <Link
              to="https://github.com/Apleon89/re-usa-client"
              target="_blank"
            >
              <button className="btn">Frontend Github</button>
            </Link>
            <Link
              to="https://github.com/Apleon89/re-usa-server"
              target="_blank"
            >
              <button className="btn">Backend Github</button>
            </Link>
          </div>
        </div>
        <div className="project-container">
          <img
            src="https://res.cloudinary.com/dacltsvln/image/upload/v1681284600/logoTalentMatch_nxreo4.png"
            alt="logo app"
            width={"200px"}
          />
          <h3>Talent Match</h3>
          <p>Aplicación Full Stack para conectar empresas y desarrolladores.</p>
          <p>MongoDB | ExpressJS | Handlebars | TailwindCSS</p>
          <Link to="https://talentmatch.cyclic.app/" target="_blank">
            <button className="btn">Visitar la web</button>
          </Link>
          <div>
            <Link to="https://github.com/jdluis/TalentMatch" target="_blank">
              <button className="btn">Github</button>
            </Link>
          </div>
        </div>
        <div className="project-container">
          <img
            src="https://res.cloudinary.com/dacltsvln/image/upload/v1681284685/Captura_de_pantalla_2023-04-12_a_las_8.31.05_leqjiz.png"
            alt="logo app"
            width={"200px"}
          />
          <h3>Retro Race Car</h3>
          <p>Juego de carreras retro realizado en Canvas.</p>
          <p>HTML5 | CSS3 | Javascript | Canvas</p>
          <Link to="https://apleon89.github.io/RetroRaceCar/" target="_blank">
            <button className="btn">Visitar la web</button>
          </Link>
          <div>
            <Link to="https://github.com/Apleon89/RetroRaceCar" target="_blank">
              <button className="btn">Github</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
