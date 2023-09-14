import "./Formations.scss";

export default function Formations() {
  return (
    <main className="formations">
      <div className="bloc-form">
        <div className="bloc1-form">
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
        </div>
      </div>
    </main>
  );
}
