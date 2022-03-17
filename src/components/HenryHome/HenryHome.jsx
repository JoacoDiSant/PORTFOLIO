import React from "react";
import ImagenHenryHome from "../../utils/hery-home.png";
import "./HenryHome.css";

function HenryHome() {
  return (
    <div className="container">
      <div className="HenryHome">
        <h1 className="grid-cols-1">
          FullStack App Created with other 5 programers using SCRUM metod. The
          app works as a bridge between the host of a house and the guest. Allow
          creating, review and reservate in the houses
        </h1>
        <div className="grid-cols-2 w-screan border-4 border-black rounded-lg">
          <img src={ImagenHenryHome} alt="pokemon" className="rounded-lg" />
        </div>
        <span className="flex justify-center items-center text-center w-40 h-8 border-0 rounded-lg p-4 bg-btn-violet hover:bg-btn-violet-hover hover:animate-pulse">
          <a
            href="https://henryhome.vercel.app/"
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

export default HenryHome;
