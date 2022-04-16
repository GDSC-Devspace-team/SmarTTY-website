import React from "react";

export default function Landing() {
  return (
    <section id="about" className="justify-center flex">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col justify-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-6xl mb-4 font-medium text-white">
            SmarTTY
            
          </h1>
          <p className="mb-8 leading-relaxed">
            A voice enabled smart terminal for smart developers
          </p>

        </div>

      </div>
    </section>
  );
}