import React from 'react';
import DesktopImg from './desktop-img ';

const Why: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div>
        <h2 className="text-3xl font-bold text-white/90 sm:text-3xl">
          Pourquoi choisir nos Services ?
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-white/80">
          Que vous soyez débutant ou professionnel, nous sommes là pour vous accompagner à chaque 
          étape. De la formation pratique à la création de sites web sur mesure, nous nous engageons à vous fournir des solutions efficaces et adaptées à vos besoins.
        </p>
      </div>
      <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <DesktopImg />
      </div>
    </div>
  );
};

export default Why;
