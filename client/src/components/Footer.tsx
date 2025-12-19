import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Mail, Phone, Linkedin, Globe, Send } from 'lucide-react';

export default function Footer() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <footer className={`bg-foreground/5 border-t border-border ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/Velox-Logo.png" alt="VeloxAI Logo" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm">
              {isArabic
                ? 'تحويل الأعمال من خلال أتمتة الذكاء الاصطناعي'
                : 'Transforming businesses through AI automation'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{isArabic ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{isArabic ? 'اتصل' : 'Contact'}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@veloxai.com" className="hover:text-foreground transition-colors">
                  {t.contact.emailAddress}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">{isArabic ? 'تابعنا' : 'Follow Us'}</h3>
            <div className="flex gap-4">
              <a
                href="https://veloxai.work"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
              >
                <Globe size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/110616209"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://t.me/VeloxAI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
              >
                <Send size={18} />
              </a>
              <a
                href="https://t.me/VeloxAI_Group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
              >
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>{t.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                {t.footer.links.privacy}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t.footer.links.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
