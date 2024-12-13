'use client';

const services = [
  {
    num: '01',
    title: 'Conception & Design',
    description: 'Création de designs modernes et logos uniques pour refléter l’identité et l’image de votre marque.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
  {
    num: '02',
    title: 'Développement Web',
    description: 'Développement de sites performants avec des frameworks modernes pour une expérience optimale.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
  {
    num: '03',
    title: 'Optimisation SEO',
    description: 'Mise en place des stratégies SEO pour vous propulser en tête des résultats de recherche Google.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
  {
    num: '04',
    title: 'Fiche Google & Visuels',
    description: 'Création de fiches Google My Business et de visuels impactants pour renforcer votre visibilité locale.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
];


const Services = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-white/90 sm:text-3xl text-center pb-12">
          Explore Nos Services pour Accélérer Votre Succès
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <section className="flex flex-col justify-center xl:py-0">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px]">
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col justify-center gap-6 group cursor-pointer"
                  >
                    <div className="w-full flex justify-between items-center">
                      <div className="text-4xl font-semibold text-outline text-white/80 group-hover:text-outline-hover transition-all duration-500">
                        {service.num}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold leading-none text-customGreen group-hover:text-accent transition-all duration-500">
                      {service.title}
                    </h2>
                    <p className="text-white/60">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center">
          <div className="bg-customGreen w-[50%] h-1.5 border-full rounded-tl-none transition-all my-20"></div>
        </div>
      </div>
    </>
  );
};

export default Services;
