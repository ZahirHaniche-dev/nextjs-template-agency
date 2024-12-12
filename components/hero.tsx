"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import TrainingImg from './formation-img';

const Hero: React.FC = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById('next-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center pb-28 pt-8 relative">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <div className="flex items-center space-x-6">
          <div className="bg-customGreen w-10 h-10 rounded-full rounded-tl-none group-hover:-translate-y-1 group-hover:shadow-xl group-hover:via-green-600 transition-all"></div>
          <h1 className="text-2xl font-bold text-white/90 tracking-tight sm:text-3xl md:text-3xl">
            Votre Partenaire en
            <span className="block text-customGreen">Conception et Formation Web</span>
          </h1>
        </div>
        <p className="mt-3 text-base text-white/80 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Je t’accompagne à apprendre le métier de développeur et à devenir autonome, tout en proposant mes services pour créer des solutions web accessibles et optimisées pour un SEO exceptionnel.
        </p>
        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <a
            href="https://hanichezahir-portfolio.vercel.app/"
            target="_blank"
          >
            <Button className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-customGreen 
              bg-transparent text-customGreen hover:bg-customGreen hover:text-primary h-[56px] px-8 text-sm tracking-[2px] uppercase flex items-center gap-2">
              En Savoir Plus Sur Moi 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
      <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <TrainingImg />
      </div>
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer pb-8"
        onClick={scrollToSection}
      >
            <button
            className="cursor-pointer bg-customGreen px-3 py-2 rounded-md text-gray-900 tracking-wider shadow-xl animate-bounce hover:animate-none"
            >
                <svg
                    className="w-5 h-5"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    ></path>
                </svg>
            </button>
      </div>
    </div>
  );
};

export default Hero;
