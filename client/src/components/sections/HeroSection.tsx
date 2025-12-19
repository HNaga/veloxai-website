import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

export default function HeroSection() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const [, setLocation] = useLocation();

  const handleGetStartedClick = () => {
    setLocation("#contact");
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-ai-automation.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={handleGetStartedClick}
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {t.hero.cta}
              <ArrowRight size={20} />
            </button>
            <a
              href="https://calendly.com/veloxai/30min?month=2025-12"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {t.hero.bookDiscoveryCall}
            </a>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30">
              {t.hero.learnMore}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-gray-200 text-sm">{isArabic ? 'مشروع مكتمل' : 'Projects Completed'}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-gray-200 text-sm">{isArabic ? 'رضا العملاء' : 'Client Satisfaction'}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-200 text-sm">{isArabic ? 'فريق الخبراء' : 'Expert Team'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
