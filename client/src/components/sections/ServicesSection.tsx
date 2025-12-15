import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Zap, Cpu, Wrench, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';

const serviceIcons = [Zap, Cpu, Wrench, Lightbulb, BookOpen, TrendingUp];

export default function ServicesSection() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  const services = [
    {
      key: 'service1',
      icon: 0,
    },
    {
      key: 'service2',
      icon: 1,
    },
    {
      key: 'service3',
      icon: 2,
    },
    {
      key: 'service4',
      icon: 3,
    },
    {
      key: 'service5',
      icon: 4,
    },
    {
      key: 'service6',
      icon: 5,
    },
  ];

  return (
    <section id="services" className={`py-20 bg-secondary/30 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const serviceData = t.services[service.key as keyof typeof t.services];

            return (
              <div
                key={index}
                className="card-elevated p-8 group hover:border-accent border border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {(serviceData as any).title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {(serviceData as any).description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            {t.cta.exploreServices}
          </button>
        </div>
      </div>
    </section>
  );
}
