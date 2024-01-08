import "./Home.scss";
import MyPdf from "@components/MyPdf/MyPdf";
import Dylan from "@assets/dylan3.png";
import background from "@assets/fond-ecran.jpg";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

import Orange from "@assets/orange1.jpg";
import Laposte from "@assets/Laposte.jpg";

export default function Home() {
  return (
    <main
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section id="home">
        <div className="accueil">
          <div className="flex">
            <img src={Dylan} alt="photo1" className="photo1" />
            <div className="accueil1">
              <div className="accueil2">
                <h1 className="presentation">Dylan Nail, développeur web</h1>
                <h2 className="objectif">
                  Je suis actuellement à la recherche d'une alternance pour un
                  an à partir du mois d'octobre 2023.{" "}
                </h2>
                <div>
                  <MyPdf />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="presentation">
        <h2 className="titre-pres">Présentation</h2>
        <p className="para-pres">
          J'ai travaillé dans le domaine du génie climatique. Après la
          découverte des vidéos tutoriels avec les différents languages de
          programmation. Je me suis réorienté dans le numérique. J'ai découvert
          une passion dans le developpement web et j'ai suivi une formation de
          cinq mois à la Wild Code School pour devenir développeur web et
          mobile. J'ai démontré mes compétences dans la programation web,
          l'utilisation des outils de développement, la gestion de projet et
          l'intéraction en équipe. Mon objectif est de devenir autonome dans ce
          métier et d'encrichir mes compétences. Je souhaite participer à des
          projets dans votre entreprise pour évoluer dans mon domaine
          d'activité.{" "}
        </p>
      </section>

      <section id="competences">
        <h2 className="titre-comp">Compétences</h2>

        <div className="flex1">
          <FaReact className="logo" />
          <FaNodeJs className="logo" />
          <BsGit className="logo" />
          <SiMysql className="logo" />
          <FaAngular className="logo" />
          <SiCanva className="logo" />
        </div>
      </section>

      <section id="experiences">
        <h2 className="titre-exp">Experiences professionelles</h2>

        <div className="bloc-orange">
          <img src={Orange} alt="orange" className="orange" />
          <h3 className="desc-orange">
            Orange - Développeur web - de février 2023 à avril 2023
          </h3>
          <p className="para-orange">
            J'ai effectué un stage en tant que développeur web frontend. J'ai
            travaillé avec Angular. J'ai participé à un projet qui s'appelle le
            Calculateur de CO2. Ce site permet d'évaluer le bilan carbone par
            salarié{" "}
          </p>
        </div>
        <div className="bloc-laposte">
          <div className="bloc1-laposte">
            <img src={Laposte} alt="laposte" className="laposte" />
            <h3 className="desc-laposte">
              La poste - Développeur web - de décembre 2022 à février 2023
            </h3>
            <p className="para-laposte">
              J'ai effectué un projet en équipe en tant que développeur web full
              stack. J'ai travaillé avec React JS, Express JS. Pour la base de
              données, j'ai travaillé avec MySql. J'ai participé à un projet qui
              s'appelle la Ligne Bleue. Ce site permet d'utiliser un outil pour
              accompagner les personnes exclues ou en risque d’exclusion du
              monde numérique en les identifiant, en les équipant d’outils
              adaptés et en les formant.{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="formations">
        <h2 className="titre-form">Formations</h2>
        <div className="wild">
          <h3 className="année-wild"> 2022-2023</h3>
          <p className="diplome">Formation développeur web et mobile</p>
          <p className="ecole">Wild Code School</p>
        </div>
        <div className="licence">
          <h3 className="année-licence"> 2019-2020</h3>
          <p className="diplome1">
            Licence professionnelle efficacité énergétique et énergies
            renouvelables
          </p>
          <p className="ecole1">IUT Brétigny-sur-Orge</p>
        </div>
        <div className="bts">
          <h3 className="année-bts"> 2017-2019</h3>
          <p className="diplome2">
            BTS Fluide Energie Domotique avec l'option Génie Climatique
          </p>
          <p className="ecole2">Lycée Raspail</p>
        </div>
        <div className="bac">
          <h3 className="année-bac"> 2016-2017</h3>
          <p className="diplome3">
            BAC STI2D avec l'option Energie Environnement
          </p>
          <p className="ecole3">Lycée Louis Bascan</p>
        </div>
      </section>
    </main>
  );
}
