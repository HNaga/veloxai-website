import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function AboutSection() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className={`py-20 bg-secondary/30 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="/images/team-collaboration.jpg"
              alt="VeloxAI Team"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg opacity-20"></div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.description}
            </p>

            {/* Mission and Vision */}
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{t.about.mission}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.about.missionText}</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{t.about.vision}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.about.visionText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
            {isArabic ? 'لماذا تختار VeloxAI' : 'Why Choose VeloxAI'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground">
                {isArabic ? 'الخبرة المثبتة' : 'Proven Expertise'}
              </h4>
              <p className="text-muted-foreground text-sm">
                {isArabic
                  ? 'سنوات من الخبرة في تسليم حلول أتمتة ناجحة'
                  : 'Years of experience delivering successful automation solutions'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground">
                {isArabic ? 'فريق مخصص' : 'Dedicated Team'}
              </h4>
              <p className="text-muted-foreground text-sm">
                {isArabic
                  ? 'فريق خبراء ملتزم بنجاح مشروعك'
                  : 'Expert team committed to your project success'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <h4 className="font-semibold mb-2 text-foreground">
                {isArabic ? 'دعم مستمر' : 'Continuous Support'}
              </h4>
              <p className="text-muted-foreground text-sm">
                {isArabic
                  ? 'دعم شامل ومتابعة مستمرة بعد التنفيذ'
                  : 'Comprehensive support and ongoing monitoring'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
