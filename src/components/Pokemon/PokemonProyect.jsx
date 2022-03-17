import React from "react";
import imagenPokemon from "../../utils/pokemon-app.png";
import "./PokemonProyect.css";

function PokemonProyect() {
  return (
    <div className="container">
      <div className="Pokemon-App">
        <h1 className="grid-cols-1">
          Application created for the Individual Project of the Bootcamp of
          SoyHenry. This App is a SPA in which through an external API brings
          Pokemon, we can filter, sort, and create our own Pokemon. brings
          Pokemons, in turn we can filter, sort, and create our own Pokemons.
          own Pokemons.
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
            Visit
          </a>
        </span>
      </div>
    </div>
  );
}

export default PokemonProyect;
