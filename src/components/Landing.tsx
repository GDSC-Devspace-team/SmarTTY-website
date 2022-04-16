import React from "react";
import { Icon } from '@iconify/react';
export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-pink-500 to-blue-500 grow">
      {/* <div className="relative z-20 mx-auto max-w-screen-2xl "> */}
      <div className="lg:grid lg:grid-cols-2 pt-8">
        <div className="text-center lg:text-left">
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
            <a href="https://github.com/GDSC-Devspace-team/SmarTTY"
              className="inline-block w-auto mx-auto lg:mx-0 text-base font-semibold text-white transition-all duration-300 rounded-full md:text-base xl:text-indigo-100 xl:mt-12 md:px-8 hover:text-green-500">
              Check us out on github
            </a>
          </div>

        </div>
        <div>
          <img src="https://media.discordapp.net/attachments/959691304789487671/964792768310423612/term_1.png" className="object-scale-down h-100 w-100" alt="" />
        </div>

      </div>
      {/* </div> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#273036" fill-opacity="1" d="M0,192L24,208C48,224,96,256,144,256C192,256,240,224,288,192C336,160,384,128,432,138.7C480,149,528,203,576,229.3C624,256,672,256,720,229.3C768,203,816,149,864,138.7C912,128,960,160,1008,197.3C1056,235,1104,277,1152,298.7C1200,320,1248,320,1296,272C1344,224,1392,128,1416,80L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
      </svg> */}
    </div>
  );
}