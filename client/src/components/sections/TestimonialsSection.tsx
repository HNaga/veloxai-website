import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function TestimonialsSection() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Tech Solutions',
      quote: 'VeloxAI transformed our operations with their innovative AI solutions. Highly recommended!',
      image: '/images/avatar-1.png', // Placeholder image
    },
    {
      name: 'Jane Smith',
      title: 'Marketing Director, Global Corp',
      quote: 'Their AI automation saved us countless hours and significantly boosted our efficiency.',
      image: '/images/avatar-2.png', // Placeholder image
    },
    {
      name: 'David Lee',
      title: 'Founder, Startup Innovate',
      quote: 'Working with VeloxAI was a game-changer. Their expertise in AI is unmatched.',
      image: '/images/avatar-3.png', // Placeholder image
    },
  ];

  return (
    <section id="testimonials" className={`py-20 bg-background ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elevated p-8 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-lg text-muted-foreground mb-4">"{testimonial.quote}"</p>
              <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
              <p className="text-sm text-accent">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
