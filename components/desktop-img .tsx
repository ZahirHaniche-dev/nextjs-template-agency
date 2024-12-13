'use client';

import Link from 'next/link';

const DesktopImg = () => {
  return (
    <section className="flex flex-col justify-center py-12 xl:py-0 cursor-pointer z-10">
      <Link href="/training">
        <img 
          src="/assets/formation_join.png" 
          alt="Rejoins-nous et découvre mes formations" 
          className="mx-auto w-max cursor-pointer"
        />
      </Link>
    </section>
  );
};

export default DesktopImg;
