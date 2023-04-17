import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiTailwindcss,
  SiReact,
  SiVite,
  SiHandlebarsdotjs,
} from "react-icons/si";
import "./Skills.css";
import { Link } from "react-router-dom";

function FrontendSkills() {
  return (
    <div id="front-skills-container">
      <h5>Frontend</h5>
      <div id="frontend-logos-container">
        <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
          <IoLogoHtml5 />
        </Link>
        <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
          <IoLogoCss3 />
        </Link>
        <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <IoLogoJavascript />
        </Link>
        <Link to="https://getbootstrap.com/" target="_blank">
          <BsFillBootstrapFill />
        </Link>
        <Link to="https://tailwindcss.com/" target="_blank">
          <SiTailwindcss />
        </Link>
        <Link to="https://react.dev/" target="_blank">
          <SiReact />
        </Link>
        <Link to="https://vitejs.dev/" target="_blank">
          <SiVite />
        </Link>
        <Link to="https://handlebarsjs.com/" target="_blank">
          <SiHandlebarsdotjs />
        </Link>
      </div>
    </div>
  );
}

export default FrontendSkills;
