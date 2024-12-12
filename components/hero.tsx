"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrainingImg from "./formation-img";

const Hero: React.FC = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("next-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-transparent relative bottom-24">
      <div className="flex items-center space-x-6 mb-4">
        <div className="bg-customGreen w-1.5 h-24 border-full rounded-tl-none transition-all"></div>
        <h1 className="text-3xl font-bold text-white tracking-tight sm:text-4xl md:text-5xl">
          Ton Partenaire Idéal pour
          <span className="block text-customGreen">Créer et Maîtriser le Web</span>
        </h1>
        <div className="bg-customGreen w-1.5 h-24 border-full rounded-tl-none transition-all"></div>
      </div>
      <p className="mt-3 text-lg text-white/80 sm:mt-5 sm:text-xl">
        Je t’accompagne à apprendre le métier de développeur et à devenir autonome, tout en
        proposant mes services pour créer des solutions web accessibles et optimisées pour un SEO
        exceptionnel.
      </p>
      <div className="mt-8 flex justify-center">
        <a
          href="https://hanichezahir-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-customGreen 
              bg-transparent text-customGreen hover:bg-customGreen hover:text-primary h-[56px] px-8 text-sm tracking-[2px] uppercase flex items-center gap-2">
            En Savoir Plus Sur Moi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
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
    </div>
  );
};

export default Hero;
