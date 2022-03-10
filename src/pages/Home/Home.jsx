import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Headers from "../Contents/Header";
import Proyects from "../Contents/Proyects";
import "./home.css";

function Home() {
  return (
    <div className="Contenedor">
      <div className="Contents">
        <section className="Select-Header">
          <Headers />
        </section>
        <section className="Select-Proyects">
          <Proyects />
        </section>
        <section className="Select-AboutMe">
          <AboutMe />
        </section>
      </div>
    </div>
  );
}

export default Home;
