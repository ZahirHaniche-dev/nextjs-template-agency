import { Terminal } from "@/app/(dashboard)/terminal";
import React from "react";

const PresentationProfil: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-white/90 sm:text-2xl">
            Découvrez Mon Parcours
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-white/80">
            <span className="font-semibold text-customGreen">Plus de 10 ans d'expérience</span> en développement web.  
            <br /> <br /> 
            <span className="font-semibold text-customGreen">Expert en solutions numériques innovantes</span>, performantes et sur mesure.  
            <br /> <br /> 
            <span className="font-semibold text-customGreen">J'accompagne entreprises et startups </span>pour des sites web accessibles, optimisés et prêts à booster leur réussite.
          </p>

         
        </div>
        <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <a
            href="https://github.com/ZahirHaniche-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Terminal />
          </a>
        </div>
      </div>
      <div className="bg-customGreen w-full h-0.5 rounded-lg border-full rounded-tl-none transition-all my-20"></div>
    </div>
  );
};

export default PresentationProfil;
