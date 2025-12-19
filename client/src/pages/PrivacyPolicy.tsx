import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <div className={`min-h-screen bg-background text-foreground py-12 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{t.privacyPolicy.title}</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.privacyPolicy.introduction.title}</h2>
          <p className="mb-4">{t.privacyPolicy.introduction.paragraph1}</p>
          <p>{t.privacyPolicy.introduction.paragraph2}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.privacyPolicy.informationCollection.title}</h2>
          <p className="mb-4">{t.privacyPolicy.informationCollection.paragraph1}</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>{t.privacyPolicy.informationCollection.item1}</li>
            <li>{t.privacyPolicy.informationCollection.item2}</li>
            <li>{t.privacyPolicy.informationCollection.item3}</li>
          </ul>
          <p>{t.privacyPolicy.informationCollection.paragraph2}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.privacyPolicy.howWeUseInformation.title}</h2>
          <p className="mb-4">{t.privacyPolicy.howWeUseInformation.paragraph1}</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>{t.privacyPolicy.howWeUseInformation.item1}</li>
            <li>{t.privacyPolicy.howWeUseInformation.item2}</li>
            <li>{t.privacyPolicy.howWeUseInformation.item3}</li>
            <li>{t.privacyPolicy.howWeUseInformation.item4}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.privacyPolicy.dataSecurity.title}</h2>
          <p>{t.privacyPolicy.dataSecurity.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.privacyPolicy.yourRights.title}</h2>
          <p className="mb-4">{t.privacyPolicy.yourRights.paragraph1}</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>{t.privacyPolicy.yourRights.item1}</li>
            <li>{t.privacyPolicy.yourRights.item2}</li>
            <li>{t.privacyPolicy.yourRights.item3}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.privacyPolicy.changesToPolicy.title}</h2>
          <p>{t.privacyPolicy.changesToPolicy.paragraph1}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.privacyPolicy.contactUs.title}</h2>
          <p className="mb-4">{t.privacyPolicy.contactUs.paragraph1}</p>
          <p>{t.privacyPolicy.contactUs.paragraph2} <a href="mailto:info@veloxai.com" className="text-accent hover:underline">info@veloxai.com</a>.</p>
        </section>

        <div className="text-center mt-12">
          <Link to="/" className="btn btn-primary">{t.privacyPolicy.backToHome}</Link>
        </div>
      </div>
    </div>
  );
}
