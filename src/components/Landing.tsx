import React from "react";
import { Icon } from '@iconify/react';
export default function Landing() {
  return (
    <div className="relative bg-gradient-to-b from-pink-500 to-blue-500 grow flex">
      <div className="lg:grid lg:grid-cols-2 py-8 lg:ml-8 lg:my-auto z-30" style={{ "paddingBottom": "10rem" }}>
        <div className="text-center lg:text-left px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            A voice-enabled Smart Terminal</h1>
          <p className="mt-6 text-lg font-medium text-white md:text-xl 2xl:text-indigo-100 lg:text-2xl">
            SmarTTY is voice assisted natural human language understanding Terminal
            which can help you perform CLI tasks with much ease.
            So you leave behind wasting time googling for commands and spend more time coding your applications!
          </p>
          <div className="flex flex-col mt-8 lg:mb-0 mb-8 space-y-6 xl:mt-12 lg:space-y-0 lg:flex-row lg:items-center">
            <a href="#download"
              className="inline-flex items-center mx-auto lg:mx-0 justify-center w-auto px-5 py-5 space-x-2 text-base font-semibold text-indigo-600 transition-all duration-300 bg-white rounded-full shadow-md hover:text-white hover:bg-green-500 md:text-base lg:px-6">
              <span>Download</span>
            </a>
            <a href="#download-list"
              className="inline-block w-auto mx-auto lg:mx-0 text-base font-semibold text-white transition-all duration-300 rounded-full md:text-base xl:text-indigo-100 xl:mt-12 md:px-8 hover:text-green-500">
              Download for another OS
            </a>
          </div>

        </div>
        <div className="flex">
          <img src="https://i.imgur.com/KMaDzA3.png" className="object-scale-down h-100 w-100 ml-auto lg:mr-0 mr-auto" alt="" />
        </div>

      </div>
      <svg className="z-20 absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0E093E" fill-opacity="1" d="M0,224L24,213.3C48,203,96,181,144,181.3C192,181,240,203,288,197.3C336,192,384,160,432,133.3C480,107,528,85,576,101.3C624,117,672,171,720,181.3C768,192,816,160,864,133.3C912,107,960,85,1008,69.3C1056,53,1104,43,1152,64C1200,85,1248,139,1296,165.3C1344,192,1392,192,1416,192L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    </div>
  );
}