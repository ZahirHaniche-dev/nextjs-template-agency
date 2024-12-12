import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';
import Services from '@/components/services';
import Why from '@/components/why';

export default function HomePage() {
  return (
    <main>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-white/90 tracking-tight sm:text-5xl md:text-6xl">
                Votre Partenaire en
                <span className="block text-customGreen">Conception et Formation Web</span>
              </h1>
              <p className="mt-3 text-base text-white/80 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              De la création de sites web à la formation en développement, nous sommes là pour vous accompagner à chaque étape.
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
        </div>
      </section>

      <section className="py-14 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Services /> 
        </div>
      </section>



      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Why />
        </div>
      </section>
    </main>
  );
}
