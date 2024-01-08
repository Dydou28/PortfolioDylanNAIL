import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home/Home";
// import Presentation from "@pages/Presentation/Presentation";
// import Competences from "@pages/Competences/Competences";
// import Experiences from "@pages/Experiences/Experiences";
// import Formations from "@pages/Formations/Formations";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/presentation" element={<Presentation />} />
        <Route exact path="/competences" element={<Competences />} />
        <Route exact path="/experiences" element={<Experiences />} />
        <Route exact path="/formations" element={<Formations />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
