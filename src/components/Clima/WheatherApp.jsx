import React from "react";
import ImagenClima from "../../utils/wheather-app.png";
import "../Pokemon/PokemonProyect.css";

function WheatherApp() {
  return (
    <div className="container">
      <div className="Pokemon-App">
        <h1 className="grid-cols-1">
          Aplicación Creada a Partir de una API externa la cual trae por medio
          de una búsqueda, la temperatura actual. Esta aplicación esta
          desarrollada enteramente con React.js, JavaScrip, Sass
        </h1>
        <div className="grid-cols-2 w-screan border-4 border-black rounded-lg">
          <img src={ImagenClima} alt="pokemon" className="rounded-lg" />
        </div>
        <span className="flex justify-center items-center text-center w-40 h-8 border-0 rounded-lg p-4 bg-btn-violet hover:bg-btn-violet-hover hover:animate-pulse">
          <a
            href="https://app-react-weather.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Visitar
          </a>
        </span>
      </div>
    </div>
  );
}

export default WheatherApp;
