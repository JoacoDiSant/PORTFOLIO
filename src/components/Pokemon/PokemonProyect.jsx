import React from "react";
import imagenPokemon from "../../utils/pokemon-app.png";
import "./PokemonProyect.css";

function PokemonProyect() {
  return (
    <div className="container">
      <div className="Pokemon-App">
        <h1 className="grid-cols-1">
          Aplicación creada para el Proyecto Individual del Bootcamp de
          SoyHenry. Essta App es una SPA en la cual por medio de una API externa
          trae Pokemons, a su vez podemos filtrar, ordenar, y crear nuestros
          propios Pokemons.
        </h1>
        <div className="grid-cols-2 w-screan border-4 border-black rounded-lg">
          <img src={imagenPokemon} alt="pokemon" className="rounded-lg" />
        </div>
        <span className="flex justify-center items-center text-center w-40 h-8 border-0 rounded-lg p-4 bg-btn-violet hover:bg-btn-violet-hover hover:animate-pulse">
          <a
            href="https://pokemon-app-xi.vercel.app"
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

export default PokemonProyect;
