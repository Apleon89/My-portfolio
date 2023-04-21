import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import TopScrollBtn from "./TopScrollBtn";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <h2>
        Alberto Pérez<span>.</span>
      </h2>
      <div id="footer-container">
        <div id="invisible-div"></div>
        <div id="footer-links-container">
          <Link to="https://www.linkedin.com/in/apleon89/" target="_blank">
            <SiLinkedin />
          </Link>
          <Link to="https://github.com/Apleon89" target="_blank">
            <SiGithub />
          </Link>
          <Link
            to="https://1drv.ms/f/s!Asgw2DpLnj0MlpZW1M9PvWIUGIGwXg?e=q2rkip"
            target="_blank"
          >
            CV
          </Link>
        </div>
        <div>
          <TopScrollBtn />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
