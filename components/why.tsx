import React from 'react';
import DesktopImg from './desktop-img ';

const Why: React.FC = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="mt-8 lg:mt-0 flex justify-center">
          <DesktopImg />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white/90 sm:text-2xl">
            Pourquoi choisir nos formations ?
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-white/80">
            Que vous soyez débutant ou en quête de perfectionnement, <span className="font-semibold text-customGreen">nos formations en développement web sont conçues pour vous faire maîtriser les bases et les technologies avancées</span>.
            <br /> <br />
            Apprenez à créer des sites web modernes et performants en utilisant les frameworks front-end les plus populaires comme <span className="font-semibold text-customGreen">React, Vue.js et Angular, ainsi que Node.js pour le développement back-end</span>.
            <br /> <br />
            Nos cours incluent des pratiques sur la conception, <span className="font-semibold text-customGreen">l'accessibilité, le SEO, et l'intégration des outils indispensables à tout développeur</span>. 
            <br /> <br />
            Rejoignez-nous pour bénéficier d'un apprentissage personnalisé et devenir un expert en développement web, prêt à relever tous les défis.
          </p>
        </div>
      </div>
      <div className="bg-customGreen w-full h-0.5 rounded-lg border-full rounded-tl-none transition-all"></div>
    </>
  );
};

export default Why;
