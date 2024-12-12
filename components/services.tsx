'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Développement Front-End',
    description: 'Création d\'interfaces modernes et performantes avec React, Angular, et Vue.js, optimisées pour une expérience utilisateur fluide.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
  {
    num: '02',
    title: 'Développement Back-End',
    description: 'Conception et implémentation de solutions robustes avec Node.js, intégration d\'API et gestion des bases de données.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
  {
    num: '03',
    title: 'Intégration Liferay DXP',
    description: 'Expertise dans la personnalisation, la migration et l\'intégration de solutions Liferay DXP pour des portails d\'entreprise performants.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
  {
    num: '04',
    title: 'Gestion de projet Agile',
    description: 'Accompagnement en tant que Scrum Master certifié pour garantir le succès des projets grâce à des méthodologies agiles.',
    href: 'https://www.linkedin.com/in/zahirhaniche/',
  },
];


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                {/* title */}
                <h2 className='text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
                {/* description */}
                <p className='text-white/60'>{service.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
