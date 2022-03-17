import React from "react";
import img from "../../utils/profile-Img.jpg";
import pdf from "../../utils/Pdf/Joaquin Di Santo-CV-DEV.pdf";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="container tablet:mt-0 desktop:mt-500">
      <div className="AboutMe" id="details">
        <h1 className="grid-cols-1">
          I am a Full-Stack Web Developer living in Argentina. I consider myself
          a multi-functional person, I am sure that teamwork is essential for
          growth as a developer. I am interested in learning new technologies. I
          consider myself a person who is capable of adapting well to any
          situation. I am in search of new challenges that push me to continue
          learning in order to develop me as a successfully professional.
        </h1>
        <div className="grid-cols-2 ">
          <img src={img} alt="pokemon" className="rounded-lg" />
        </div>
        <div className="container grid grid-flow-col grid-rows-2 text-center mb-10 ">
          <span className="text-xl font-semibold grid-cols-1">02</span>
          <span className="text-xs grid-cols-2">
            Years
            <br />
            Experience
          </span>
          <span className="text-xl font-semibold grid-cols-1">03</span>
          <span className="text-xs grid-cols-2">
            Completed
            <br />
            Proyects
          </span>
        </div>
        <div className="flex justify-center">
          <span className="flex justify-center text-center w-40 h-8 border-0 rounded-lg p-4 mr-4 bg-btn-violet hover:bg-btn-violet-hover hover:animate-pulse">
            <a href={pdf} download className="inline-flex items-center">
              Download CV<i className="uil uil-file-download button__icon"></i>
            </a>
          </span>
          <span className="flex justify-center text-center w-40 h-8 border-0 rounded-lg p-4 bg-btn-violet hover:bg-btn-violet-hover hover:animate-pulse">
            <a href={"/contactMe"} className="inline-flex items-center">
              Contact me
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
