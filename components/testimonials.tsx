import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Louis Marais",
    title: "FrontEnd Developer chez Inetum",
    feedback: (
      <>
        Zahir possède un talent avéré pour le management. <br />
        <br />
        Bienveillant, motivant et empathique. <br />
        <br />
        Je n’aurais pas pu compter sur un meilleur tuteur : son sens du collectif et son attachement à l’humain sont évidents, et font de lui un professionnel compétent et unique.
      </>
    ),
    image: "/assets/linkedin/louis.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/louis-marais",
  },
  {
    id: 2,
    name: "Hilel Kinane",
    title: "BackEnd Developer chez BNP Paribas",
    feedback: (
      <>
        Je recommande Zahir pour sa disponibilité et sa pédagogie en tant que lead. <br />
        <br />
        Zahir priorise l’humain avant tout et permet à ses collègues de se surpasser en toutes circonstances.
      </>
    ),
    image: "/assets/linkedin/hilel.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/hilel-kinane",
  },
  {
    id: 3,
    name: "Nabil Talaoubrid",
    title: "Chef de Projet chez Bouygues Télécom",
    feedback: (
      <>
        Ayant eu le plaisir d’étudier avec Zahir je ne peux que recommander ces qualités. <br />
        <br />
        Je retiens de Zahir ses grandes qualités humaines mais aussi son sérieux et sa détermination qui font de lui une personne fiable et efficace. <br />
        <br />
        Il sera sans aucun doute un élément précieux dans toute équipe.
      </>
    ),
    image: "/assets/linkedin/nabil.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/nabil-talaoubrid",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-center text-white/90 sm:text-3xl mb-12">
          Témoignages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-customGreen"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-customGreen">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-white/80">{testimonial.feedback}</p>
              </div>
              <div className="mt-6 flex justify-center z-10">
                <a
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold 
                    bg-[#0077B5] text-white hover:bg-[#005582] hover:scale-105 transition-transform duration-200 h-[36px] p-6"
                >
                  Voir le profil LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
