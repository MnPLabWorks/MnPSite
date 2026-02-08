import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <img
            src="/Company Logo.png"
            alt="MPCodeLabs Logo"
            className="h-48 w-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
          Welcome to MPCodeLabs
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Think. Code. Deliver.
        </p>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
          Transforming ideas into innovative solutions through cutting-edge technology and exceptional craftsmanship
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get In Touch
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
