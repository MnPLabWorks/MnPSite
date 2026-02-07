import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that matter, aligned with your business goals and objectives.',
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Innovation First',
      description: 'Leveraging the latest technologies to create cutting-edge solutions that drive results.',
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through exceptional service.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About M&P Labs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are a technology company dedicated to creating innovative solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-slate-50 hover:bg-blue-50 transition-all transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            With a team of experienced developers, designers, and strategists, M&P Labs delivers comprehensive technology solutions tailored to your unique needs. From web applications to mobile solutions, we bring your vision to life with precision and creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
