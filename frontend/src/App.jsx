import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home/Home";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
