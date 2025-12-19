import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, isArabic } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'courses', href: '#courses' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/Velox-Logo.png" alt="VeloxAI Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium text-sm"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-300 font-medium text-sm"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors duration-300 font-medium"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
