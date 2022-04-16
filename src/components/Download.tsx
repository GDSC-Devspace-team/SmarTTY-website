import React from "react";

export default function Download() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col h-96">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center">
         
            <div className="flex justify-center">
            <button className="h-15 bg-blue-500 hover:bg-blue-700 font-bold text-white sm:text-3xl text-3xl py-2 px-4 border border-blue-700 rounded">
            Download 
            <img src="https://i.imgur.com/f8QYzHh.png" className="object-scale-down h-8 w-8" alt="" />
            </button>
            </div>

        </div>

      </div>
    </section>
  );
}