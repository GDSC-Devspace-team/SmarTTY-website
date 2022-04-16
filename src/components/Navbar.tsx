import { Icon } from "@iconify/react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-950 p-5">
        <div className="grid grid-cols-12 gap-2">
            <div className="flex">
                <Icon icon="ion:terminal-outline" width="60" height="60"/>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white sm:text-xl lg:text-xl xl:text-3xl">
                SmarTTY
                </h1> 
            </div>
            <div>

            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
            <a href="https://github.com/GDSC-Devspace-team/SmarTTY" 
               className="inline-block w-auto text-base font-semibold text-white transition-all duration-300 rounded-full md:text-base xl:text-indigo-100 xl:mt-12 md:px-8 hover:text-green-500">
            <h1 className="text-3xl font-bold text-white sm:text-xl lg:text-xl xl:text-3xl">
                Github
            </h1>
          </a>
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        
        </div>
        
    </nav>
  );
}