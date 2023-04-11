import { Link } from "react-router-dom";

function Projects() {
  return (
    <section>
      <h4>Proyectos</h4>
      <h2>Últimos trabajos</h2>
      <div>
        <img src="" alt="" />
        <h3>Re-Usa</h3>
        <p>Aplicación MERN Stack de intercambio de productos de segundamano.</p>
        <p>MongoDB | ExpressJS | ReactJS | NodeJS | CSS3</p>
        <Link to='https://re-usa.netlify.app/'>
          <button>Visitar la web</button>
        </Link>
        <div>
          <Link to='https://github.com/Apleon89/re-usa-client'>
            <button>Frontend Github</button>
          </Link>
          <Link to='https://github.com/Apleon89/re-usa-server'>
            <button>Backend Github</button>
          </Link>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <h3>Talent Match</h3>
        <p>Aplicación Full Stack para conectar empresas y desarrolladores.</p>
        <p>MongoDB | ExpressJS | Handlebars | TailwindCSS</p>
        <Link to='https://talentmatch.cyclic.app/'>
          <button>Visitar la web</button>
        </Link>
        <div>
          <Link to='https://github.com/jdluis/TalentMatch'>
            <button>Github</button>
          </Link>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <h3>Retro Race Car</h3>
        <p>Juego de carreras retro realizado en Canvas.</p>
        <p>HTML5 | CSS3 | Javascript | Canvas</p>
        <Link to='https://apleon89.github.io/RetroRaceCar/'>
          <button>Visitar la web</button>
        </Link>
        <div>
          <Link to='https://github.com/Apleon89/RetroRaceCar'>
            <button>Github</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
