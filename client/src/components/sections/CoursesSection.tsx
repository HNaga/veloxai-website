import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ExternalLink, Star } from 'lucide-react';

export default function CoursesSection() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  const courses = [
    {
      key: 'course1',
      image: '/images/courses-learning.jpg',
      rating: 4.8,
      students: '12,500+',
    },
    {
      key: 'course2',
      image: '/images/technology-innovation.jpg',
      rating: 4.9,
      students: '8,300+',
    },
    {
      key: 'course3',
      image: '/images/services-automation.jpg',
      rating: 4.7,
      students: '6,200+',
    },
  ];

  return (
    <section id="courses" className={`py-20 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.courses.title}</h2>
          <p className="section-subtitle">{t.courses.subtitle}</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => {
            const courseData = t.courses[course.key as keyof typeof t.courses];

            return (
              <div
                key={index}
                className="card-elevated overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={(courseData as any).title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {(courseData as any).title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {(courseData as any).description}
                  </p>

                  {/* Rating and Students */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(course.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-foreground ml-1">{course.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{course.students}</span>
                  </div>

                  {/* CTA */}
                  <button className="w-full px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    {isArabic ? 'عرض الدورة' : 'View Course'}
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <a
            href="https://www.udemy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t.courses.viewCourses}
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
