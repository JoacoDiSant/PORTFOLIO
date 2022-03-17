import React from "react";
import WheatherApp from "../../components/Clima/WheatherApp";
import HenryHome from "../../components/HenryHome/HenryHome";
import PokemonProyect from "../../components/Pokemon/PokemonProyect";

function Proyects() {
  return (
    <div className="container flex flex-col w-full h-full max-h-px" id="proyects">
      <span className="flex ">Pokemon App</span>
      <span className="border-b-4 w-32 border-dark-violet rounded-br-3xl"></span>
      <span className="border-4 w-24 rounded-br-3xl border-dark-violet"></span>
      <div>
        <PokemonProyect />
      </div>
      <br />
      <span className="flex ">Wheather App</span>
      <span className="border-b-4 w-32 border-dark-violet rounded-br-3xl"></span>
      <span className="border-4 w-24 rounded-br-3xl border-dark-violet"></span>
      <div>
        <WheatherApp />
      </div>
      <br />
      <span className="flex ">Henry Home</span>
      <span
        id="proyects"
        className="border-b-4 w-32 border-dark-violet rounded-br-3xl"
      ></span>
      <span
        id="proyects"
        className="border-4 w-24 rounded-br-3xl border-dark-violet"
      ></span>
      <div>
        <HenryHome />
      </div>
    </div>
  );
}

export default Proyects;
