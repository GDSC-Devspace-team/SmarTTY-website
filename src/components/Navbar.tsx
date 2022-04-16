import { Icon } from "@iconify/react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="p-4 mx-8" style={{ "background": "#0E093E" }}>
      <div className="flex flex-row flex-wrap justify-between items-center gap-4 sm:gap-0">
        <div className="flex flex-row items-center gap-4 sm:mx-0 mx-auto">
          <img src="https://i.imgur.com/s3M3FDJ.png" width="60" height="60" />
          <h1 className="text-3xl font-bold text-white sm:text-xl lg:text-xl xl:text-3xl">
            SmarTTY
          </h1>
        </div>
        <div className="sm:mx-0 mx-auto">
          <a href="https://github.com/GDSC-Devspace-team/SmarTTY"
            className="text-base font-semibold text-white transition-all duration-300 rounded-full xl:text-indigo-100 xl:mt-12 px-8 hover:text-green-500">
            <img src="https://i.imgur.com/o108Rjv.png" className="font-bold text-white text-lg lg:text-xl xl:text-3xl" />
          </a>
        </div>

      </div>

    </nav>
  );
}