import "./Home.scss";
import MyPdf from "@components/MyPdf/MyPdf";
import Dylan from "@assets/photo-dylan.jpg";

export default function Home() {
  return (
    <main>
      <div className="accueil">
        <img src={Dylan} alt="photo1" className="photo1" />
        <div className="accueil1">
          <h1 className="presentation">
            Bonjour je m'appelle Dylan Nail, je suis développeur web
          </h1>
          <h2 className="objectif">
            Je suis actuellement à la recherche d'une alternance pour un an à
            partir du mois de septembre.{" "}
          </h2>
          <div>
            <MyPdf />
          </div>
        </div>
      </div>
    </main>
  );
}
