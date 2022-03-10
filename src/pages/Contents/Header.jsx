import React from "react";

function Contents() {
  return (
    <div className="container flex flex-col w-full">
      <div className="flex flex-col outline-none p-10">
        <h3 className="text-3xl animate-scrolls">
          <span>Joaquin Di Santo</span>
          <span className="flex border-b-4 w-96 border-dark-violet rounded-br-3xl"></span>
          <span className="flex border-8 w-72 rounded-b-full border-dark-violet"></span>
        </h3>
        <h1 className="text-9xl">
          Full
          <span className="text-black animate-colors">Stack</span>
        </h1>
        <h1 className="text-9xl">
          <span className="text-black animate-colors">Web</span> Developer
        </h1>
      </div>
    </div>
  );
}

export default Contents;
