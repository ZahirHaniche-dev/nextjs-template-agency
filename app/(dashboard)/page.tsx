import Hero from '@/components/hero';
import Services from '@/components/services';
import Why from '@/components/why';

export default function HomePage() {
  return (
    <main>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </section>
      <section className="py-14 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Services /> 
        </div>
      </section>
      <section className="py-14 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Why />
        </div>
      </section>
    </main>
  );
}
