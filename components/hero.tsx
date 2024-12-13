"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("next-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return (
    <><div className="h-[740px] flex flex-col justify-center items-center text-center bg-transparent relative bottom-20">
    <div className="flex items-center space-x-6 mb-4  hover:scale-105 transition-transform duration-200">
      <div className="bg-customGreen w-1.5 h-24 border-full rounded-tl-none transition-all"></div>
      <h1 className="text-3xl font-bold text-white tracking-tight sm:text-4xl md:text-6xl">
        <span className="font-light">Transformez vos idées</span>
        <span className="block text-customGreen">en réalité digitale</span>
      </h1>
      <div className="bg-customGreen w-1.5 h-24 border-full rounded-tl-none transition-all"></div>
    </div>
    <p className="mt-3 text-lg text-white/80 sm:mt-5 sm:text-2xl py-6">
      Création de <span className="text-customGreen font-bold underline">Sites Web Performants</span> et <span className="text-customGreen font-bold underline">Formations</span> pour bâtir votre avenir.
    </p>
    <div className="mt-8 flex justify-center">
      <a
        href="https://hanichezahir-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center hover:scale-105 transition-transform duration-200">
          <Button className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-customGreen 
              bg-transparent text-customGreen hover:bg-customGreen hover:text-primary h-[56px] px-8 text-lg tracking-[2px] uppercase flex items-center gap-2">
            En Savoir Plus Sur Moi
          </Button>
        </div>
        
      </a>
    </div>
    
  </div>
  <div
    className="absolute top-[630px] left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
    onClick={scrollToSection}
  >
    <button
      className="bg-customGreen px-3 py-2 rounded-md text-gray-900 tracking-wider shadow-xl animate-bounce hover:animate-none"
    >
      <svg
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  </div>
</>
    
  );
};

export default Hero;
