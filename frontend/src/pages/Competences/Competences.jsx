import "./Competences.scss";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

export default function Competences() {
  return (
    <main className="competences">
      <div className="bloc-comp">
        <div className="logo1-comp">
          <h2 className="titre-comp">Compétences</h2>
          <div className="logo-comp">
            <FaReact className="logo" />
            <FaNodeJs className="logo" />
            <BsGit className="logo" />
            <SiMysql className="logo" />
            <FaAngular className="logo" />
            <SiCanva className="logo" />
          </div>
        </div>
      </div>
    </main>
  );
}
