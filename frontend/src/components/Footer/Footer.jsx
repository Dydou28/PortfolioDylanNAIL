import "./Footer.scss";

import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const urlLinkedin = "https://www.linkedin.com/in/dylan-nail";
  const urlGithub = "https://github.com/Dydou28";
  return (
    <footer className="footer">
      <div className="icons">
        <div className="linkedin">
          <a
            href={urlLinkedin}
            target="_blank"
            rel="noreferrer"
            className="linkedin1"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="github">
          <a
            href={urlGithub}
            target="_blank"
            rel="noreferrer"
            className="github1"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
