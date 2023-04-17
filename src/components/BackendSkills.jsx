import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si'
import { Link } from "react-router-dom";

function BackendSkills() {
  return (
    <div id="back-skills-container">
      <h5>Backend</h5>
      <div id="backend-logos-container">
      <Link to="https://nodejs.org/en" target="_blank">
        <IoLogoNodejs />
      </Link>
      <Link to="https://expressjs.com/" target="_blank"> 
       <SiExpress />
      </Link>
      <Link to="https://www.mongodb.com/" target="_blank">
        <SiMongodb />
      </Link>
      <Link to="https://www.postman.com/" target="_blank">
        <SiPostman />
      </Link>
      </div>
    </div>
  );
}

export default BackendSkills;
