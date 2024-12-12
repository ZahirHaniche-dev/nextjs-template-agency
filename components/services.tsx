'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
    {
      num: '01',
      title: 'Formation Web',
      description: "Je forme les débutants au développement web en assurant un suivi personnalisé, pour vous rendre autonome et confiant dans vos compétences.",
      href: '/training',
    },
    {
      num: '02',
      title: 'Services Freelance',
      description: "Je propose des services sur mesure en tant que développeur web indépendant, avec une approche flexible et adaptée à vos besoins spécifiques.",
      href: 'https://hanichezahir-portfolio.vercel.app/services',
    },
    {
      num: '03',
      title: 'Solutions Performantes',
      description: "Je conçois et intègre des solutions numériques performantes, respectant les normes SEO, RGAA et l'environnement, pour répondre à vos attentes.",
      href: 'https://hanichezahir-portfolio.vercel.app/resume',
    },
    {
      num: '04',
      title: 'Accompagnement Continu',
      description: "Je reste disponible pour un suivi personnalisé après vos projets, en assurant un soutien constant et adapté à vos évolutions.",
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
                    className='w-[50px] h-[50px] rounded-full bg-customGreen group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
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
