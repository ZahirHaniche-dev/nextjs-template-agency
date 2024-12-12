import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Why: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div>
        <h2 className="text-3xl font-bold text-white/90 sm:text-4xl">
          Pourquoi choisir nos Services ?
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-white/80">
          Que vous soyez débutant ou professionnel, nous sommes là pour vous accompagner à chaque 
          étape. De la formation pratique à la création de sites web sur mesure, nous nous engageons à vous fournir des solutions efficaces et adaptées à vos besoins.
        </p>
      </div>
      <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <a
          href="https://github.com/leerob/next-saas-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-customGreen 
            bg-transparent text-customGreen hover:bg-customGreen hover:text-primary h-[56px] px-8 text-sm tracking-[2px] uppercase flex items-center gap-2">
            View the code
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Why;
