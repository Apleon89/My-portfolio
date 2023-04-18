import BackendSkills from "./BackendSkills";
import FrontendSkills from "./FrontendSkills";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h4>SKILLS</h4>
      <h2>Tecnologías que conozco</h2>
      <div id="skills-container">
        <FrontendSkills />
        <BackendSkills />
      </div>
    </section>
  );
}

export default Skills;
