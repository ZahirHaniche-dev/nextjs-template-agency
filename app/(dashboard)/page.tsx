import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Votre Partenaire en
                <span className="block text-customGreen">Conception et Formation Web</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              De la création de sites web à la formation en développement, nous sommes là pour vous accompagner à chaque étape.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://hanichezahir-portfolio.vercel.app/"
                  target="_blank"
                >
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
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

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-orange-500  text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18.2A8.2 8.2 0 1 1 20.2 12 8.21 8.21 0 0 1 12 20.2zM12 11a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1zm0-3.75A1.25 1.25 0 1 0 13.25 9 1.25 1.25 0 0 0 12 7.25z"></path>
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Formations pour Débutants
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Apprenez les bases du développement web, devenez autonome et
                  maîtrisez les outils modernes grâce à un suivi personnalisé.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-orange-500  text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v4h14V5H5zm14 6H5v6h14v-6zm-6 8H5v2h8v-2z"></path>
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Conception de Sites Web Performants
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Des sites modernes et rapides, conçus pour respecter les normes
                  RGAA, améliorer votre SEO, et offrir une expérience utilisateur
                  optimale.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-orange-500  text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 2a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9zm0 16.2A7.2 7.2 0 1 1 18.2 11 7.208 7.208 0 0 1 11 18.2zM14 11h-2V6a1 1 0 0 0-2 0v6h3a1 1 0 1 0 1-1z"></path>
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Suivi et Assistance Personnalisés
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Nous vous accompagnons après la formation ou la livraison de votre
                  site pour garantir votre succès à long terme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Pourquoi choisir nos Services ?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Que vous soyez débutant ou professionnel, nous sommes là pour vous accompagner à chaque étape. De la formation pratique à la création de sites web sur mesure, nous nous engageons à vous fournir des solutions efficaces et adaptées à vos besoins.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="https://github.com/leerob/next-saas-starter"
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  View the code
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
