"use client";

import Testimonials from "@/components/testimonials";
import React, { useState } from "react";

const pricingData = [
  {
    id: 1,
    title: "Débutant",
    features: "Apprenez les bases du développement web",
    price: "450 €",
    description: "Idéal pour apprendre les fondamentaux et commencer votre parcours.",
    hours: "7 heures",
    details: `Ce programme est conçu pour les novices souhaitant se lancer dans le développement web.

Vous apprendrez les bases du HTML, CSS et JavaScript, ainsi que les bonnes pratiques pour créer vos premiers sites statiques.

À la fin de cette formation, vous aurez les compétences nécessaires pour construire des pages web simples et structurées.`,
    calendlyUrl: "https://calendly.com/votre-calendly/30min",
  },
  {
    id: 2,
    title: "Intermédiaire",
    features: "Perfectionnez vos compétences techniques",
    price: "750 €",
    description: "Parfait pour progresser et consolider vos acquis.",
    hours: "12 heures",
    details: `Destiné aux développeurs ayant déjà des bases en HTML, CSS et JavaScript, ce programme vous permettra de passer au niveau supérieur.

Vous apprendrez à créer des applications web dynamiques en utilisant des frameworks modernes comme React pour le front-end et Node.js pour le back-end.

Vous explorerez également la gestion des états, l’intégration d’API, et la connexion à des bases de données.`,
    calendlyUrl: "https://calendly.com/votre-calendly/30min",
  },
  {
    id: 3,
    title: "Avancée",
    features: "Maîtrisez les outils professionnels modernes",
    price: "1 050 €",
    description: "Idéal pour devenir expert et exceller dans le développement web.",
    hours: "21 heures",
    details: `Ce programme avancé est conçu pour les développeurs souhaitant maîtriser des compétences techniques approfondies.

Vous apprendrez à optimiser les performances des applications, améliorer l'accessibilité (RGAA), et intégrer des pratiques SEO pour un meilleur référencement sur Google.

Cette formation couvre également des outils et frameworks professionnels pour construire des applications robustes et scalables, prêts pour des environnements de production.`,
    calendlyUrl: "https://calendly.com/votre-calendly/30min",
  },
];

const Price = () => {
  const [selectedDetails, setSelectedDetails] = useState<string | null>(null);
  const [calendlyLink, setCalendlyLink] = useState<string>("");

  const handleShowDetails = (details: string, link: string) => {
    setSelectedDetails(details);
    setCalendlyLink(link);
  };

  const handleCloseModal = () => {
    setSelectedDetails(null);
    setCalendlyLink("");
  };

  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-3xl font-bold text-center text-white/90 sm:text-3xl mb-8">
        Tarifs et Prise De Rendez-Vous
      </h2>
      <p className="max-w-4xl text-base text-white/80 mb-8 leading-relaxed">
        Découvrez nos <span className="font-semibold text-customGreen">offres et formations</span> adaptées à vos besoins. 
        <br /><br />
        Chaque offre inclut un <span className="font-semibold text-customGreen">rendez-vous gratuit via Calendly</span> pour discuter de vos attentes. Cet échange me permet de mieux comprendre vos objectifs et de concevoir un suivi personnalisé.
        <br /><br />
        Je vous proposerai ensuite des <span className="font-semibold text-customGreen">dates de formation exclusives</span>, intégrant des projets innovants pour mettre en pratique vos apprentissages dans un cadre concret.
        <br /><br />
        Et ce n’est pas tout : je reste <span className="font-semibold text-customGreen">disponible</span> même après la formation pour répondre à vos questions, vous <span className="font-semibold text-customGreen">accompagner</span>, et vous <span className="font-semibold text-customGreen">aider dans votre recherche d’emploi</span>.
      </p>

      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className="card hover:scale-105 duration-200 text-white w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          >
            <div className="px-8 py-10">
              <div className="bg-customGreen w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:via-green-600 transition-all"></div>
              <div className="uppercase font-bold text-2xl py-2">{plan.title}</div>
              <div className="text-white/80 uppercase tracking-widest text-sm">{plan.features}</div>
              <div className="text-white/80 mt-8">
                <p className="font-bold text-2xl text-customGreen">{plan.price}</p>
                <p>{plan.description}</p>
                <p className="mt-2 text-xl">Durée : {plan.hours}</p>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => handleShowDetails(plan.details, plan.calendlyUrl)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white 
                    bg-customGreen text-primary hover:bg-transparent hover:border hover:border-customGreen hover:text-customGreen hover:scale-105 transition-transform duration-200 h-[44px] px-6"
                >
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-green-600 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-green-400 group-hover:via-green-600 w-[70%] m-auto rounded transition-all"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ×
            </button>
            <div className="text-gray-800 whitespace-pre-line mb-6">{selectedDetails}</div>
            <div className="mt-6 flex justify-center">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white 
                  bg-customGreen text-primary hover:bg-transparent hover:border hover:border-customGreen hover:text-customGreen hover:scale-105 transition-transform duration-200 h-[44px] px-6"
              >
                Prendre un rendez-vous
              </a>
            </div>
          </div>
        </div>
      )}
      <Testimonials />
    </div>
  );
};

export default Price;
