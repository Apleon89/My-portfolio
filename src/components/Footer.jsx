import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import TopScrollBtn from "./TopScrollBtn";

function Footer() {
  return (
    <footer>
      <h2>
        Alberto Pérez<span>.</span>
      </h2>

      <div>
        <Link to="https://www.linkedin.com/in/apleon89/" target="_blank">
          <SiLinkedin />
        </Link>
        <Link to="https://github.com/Apleon89" target="_blank">
          <SiGithub />
        </Link>
        <Link
          to="https://1drv.ms/b/s!Asgw2DpLnj0MlLNMs0P3-xI-N64gKA?e=wWSW2a"
          target="_blank"
        >
          CV
        </Link>
      </div>
      <div>
        <TopScrollBtn />
      </div>
    </footer>
  );
}

export default Footer;
