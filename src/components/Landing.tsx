import React from "react";
import { Icon } from '@iconify/react';
export default function Landing() {
  return (
    <header className="bg-gradient-to-b from-pink-500 to-blue-500 h-screen">
      <div className="relative z-20 mx-auto max-w-screen-2xl ">
        <div className="max-w-[530px] lg:max-w-full lg:grid lg:grid-cols-2 py-20">
          <div className="py-20">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          A voice-enabled Smart Terminal</h1>
          <p className="max-w-[500px] mt-6 text-lg font-medium text-white xl:max-w-lg md:text-xl 2xl:text-indigo-100 xl:leading-snug lg:text-2xl">
          SmarTTY is voice assisted natural human language understanding Terminal 
          which can help you perform CLI tasks with much ease. 
          So you leave behind wasting time googling for commands and spend more time coding your applications! 
          </p>
        <div className="flex flex-col mt-8 space-y-6 xl:mt-12 md:space-y-0 md:flex-row md:items-center">
          <a href="#download" 
                 className="inline-flex items-center justify-center w-auto px-5 py-5 space-x-2 text-base font-semibold text-indigo-600 transition-all duration-300 bg-white rounded-full shadow-md hover:text-white hover:bg-green-500 md:text-base lg:px-6">
            <span>Download</span>
          </a>
          <a href="https://github.com/GDSC-Devspace-team/SmarTTY" 
               className="inline-block w-auto text-base font-semibold text-white transition-all duration-300 rounded-full md:text-base xl:text-indigo-100 xl:mt-12 md:px-8 hover:text-green-500">
            Check us out on github
          </a>
        </div>
          
  </div>
  <div className="w-full">
  <img src="https://i.imgur.com/CbIOhMx.png" className="object-scale-down h-100 w-100"  alt="" />
  </div>
  
  </div>
  </div>
    </header>
  );
}