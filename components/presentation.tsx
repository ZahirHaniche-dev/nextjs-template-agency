import { Terminal } from "@/app/(dashboard)/terminal";
import React from "react";

const PresentationProfil: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <a
                href="https://github.com/leerob/next-saas-starter"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Terminal />
                </a> 
            </div>
            <div>
                <h2 className="text-3xl font-bold text-white/90 sm:text-3xl">
                Pourquoi choisir nos Services ?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-white/80">
                Que vous soyez débutant ou professionnel, nous sommes là pour vous accompagner à chaque 
                étape. De la formation pratique à la création de sites web sur mesure, nous nous engageons à vous fournir des solutions efficaces et adaptées à vos besoins.
                </p>
            </div>
        </div>
        <div className="border-b border-white/20 w-full py-8"></div>
    </div>
  );
};

export default PresentationProfil;
