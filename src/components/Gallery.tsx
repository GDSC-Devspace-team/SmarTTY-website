import React from "react";

export default function Gallery() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Gallery
          </h1>
         
           <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
          <div className="w-full rounded hover:opacity-50">
          <img src="https://i.imgur.com/CbIOhMx.png" className="object-scale-down h-100 w-100"  alt="" />
          </div>
          <div className="w-full rounded hover:opacity-50">
          <img src="https://cdn.discordapp.com/attachments/959691304789487671/964743127753699328/unknown.png" className="object-scale-down h-85 w-100" alt="" />
         
    </div>
</div>
         
        </div>
        
      </div>
    </section>
  );
}