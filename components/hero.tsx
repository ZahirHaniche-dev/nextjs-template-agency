import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Terminal } from '@/app/(dashboard)/terminal';

const Hero: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <div className="flex items-center space-x-6">
            <div className="bg-customGreen w-10 h-10 rounded-full rounded-tl-none group-hover:-translate-y-1 group-hover:shadow-xl group-hover:via-green-600 transition-all"></div>
            <h1 className="text-2xl font-bold text-white/90 tracking-tight sm:text-3xl md:text-3xl">
                Votre Partenaire en
                <span className="block text-customGreen">Conception et Formation Web</span>
            </h1>
            </div>

            <p className="mt-3 text-base text-white/80 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Je vous accompagne à chaque étape, de la création de sites web sur mesure à la formation en développement web, pour garantir votre réussite.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <a
                href="https://hanichezahir-portfolio.vercel.app/"
                target="_blank"
            >
                <Button className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-customGreen 
                bg-transparent text-customGreen hover:bg-customGreen hover:text-primary h-[56px] px-8 text-sm tracking-[2px] uppercase flex items-center gap-2">
                En Savoir Plus Sur Moi 
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </a>
            </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <Terminal />
        </div>
    </div>
  );
};

export default Hero;
