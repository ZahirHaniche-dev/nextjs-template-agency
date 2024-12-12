import React from 'react';

const pricingData = [
  {
    id: 1,
    title: 'Débutant',
    features: 'Apprenez les bases du développement web',
    price: '450 €',
    description: 'Idéal pour apprendre les fondamentaux et démarrer.',
    hours: '7 heures'
  },
  {
    id: 2,
    title: 'Intermédiaire',
    features: 'Perfectionnez vos compétences techniques',
    price: '750 €',
    description: "Parfait pour progresser et aller de l'avant efficacement.",
    hours: '12 heures'
  },
  {
    id: 3,
    title: 'Avancée',
    features: 'Maîtrisez les outils professionnels modernes',
    price: '1 050 €',
    description: "Idéal pour exceller avec des frameworks en vogue et reconnus.",
    hours: '21 heures'
  },
];

const Price = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-4 py-16">
      {pricingData.map((plan) => (
        <div
          key={plan.id}
          className="card text-white w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
        >
          <div className="px-8 py-10">
            <div className="bg-customGreen w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:via-green-600 transition-all"></div>
            <div className="uppercase font-bold text-xl">{plan.title}</div>
            <div className="text-white/80 uppercase tracking-widest text-xs">{plan.features}</div>
            <div className="text-white/80 mt-8">
              <p className="font-bold text-lg text-customGreen">{plan.price}</p>
              <p>{plan.description}</p>
              <p className="mt-2">Durée : {plan.hours}</p>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-green-600 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-green-400 group-hover:via-green-600 w-[70%] m-auto rounded transition-all"></div>
        </div>
      ))}
    </div>
  );
};

export default Price;
