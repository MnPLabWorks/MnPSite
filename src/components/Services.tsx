import { Code2, Smartphone, Cloud, Palette, Database, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance.',
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for your growing business needs.',
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind for maximum engagement.',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Database Design',
      description: 'Robust database architectures that ensure data integrity and optimal query performance.',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures to protect your data and maintain regulatory compliance.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.filter(service => !['Cloud Solutions', 'Database Design', 'Security & Compliance'].includes(service.title)).map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
