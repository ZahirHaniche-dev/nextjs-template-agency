import Hero from '@/components/hero';
import PresentationProfil from '@/components/presentation';
import Why from '@/components/why';


export default function HomePage() {
  return (
    <main>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </section>
      <section className="pb-12 pt-8 w-full"  id="next-section">
        <PresentationProfil />
      </section>
      <section className="pb-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Why />
        </div>
      </section>
    </main>
  );
}
