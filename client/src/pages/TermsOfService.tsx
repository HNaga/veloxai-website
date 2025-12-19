import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <div className={`min-h-screen bg-background text-foreground py-12 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{t.termsOfService.title}</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.introduction.title}</h2>
          <p className="mb-4">{t.termsOfService.introduction.paragraph1}</p>
          <p>{t.termsOfService.introduction.paragraph2}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.acceptance.title}</h2>
          <p>{t.termsOfService.acceptance.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.services.title}</h2>
          <p>{t.termsOfService.services.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.userObligations.title}</h2>
          <p className="mb-4">{t.termsOfService.userObligations.paragraph1}</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>{t.termsOfService.userObligations.item1}</li>
            <li>{t.termsOfService.userObligations.item2}</li>
            <li>{t.termsOfService.userObligations.item3}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.intellectualProperty.title}</h2>
          <p>{t.termsOfService.intellectualProperty.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.disclaimerOfWarranties.title}</h2>
          <p>{t.termsOfService.disclaimerOfWarranties.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.limitationOfLiability.title}</h2>
          <p>{t.termsOfService.limitationOfLiability.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.governingLaw.title}</h2>
          <p>{t.termsOfService.governingLaw.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.changesToTerms.title}</h2>
          <p>{t.termsOfService.changesToTerms.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.termsOfService.contactUs.title}</h2>
          <p className="mb-4">{t.termsOfService.contactUs.paragraph1}</p>
          <p>{t.termsOfService.contactUs.paragraph2} <a href="mailto:info@veloxai.com" className="text-accent hover:underline">info@veloxai.com</a>.</p>
        </section>

        <div className="text-center mt-12">
          <Link to="/" className="btn btn-primary">{t.termsOfService.backToHome}</Link>
        </div>
      </div>
    </div>
  );
}
