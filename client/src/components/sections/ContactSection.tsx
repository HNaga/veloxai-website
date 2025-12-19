import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = isArabic ? 'الاسم مطلوب' : 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = isArabic ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = isArabic ? 'صيغة البريد الإلكتروني غير صالحة' : 'Invalid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = isArabic ? 'الموضوع مطلوب' : 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = isArabic ? 'الرسالة مطلوبة' : 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when user starts typing
  };

  return (
    <section id="contact" className={`py-20 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Email */}
            <div className="card-elevated p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{t.contact.email}</h3>
              <a
                href="mailto:info@veloxai.com"
                className="text-accent hover:text-accent/80 transition-colors break-all"
              >
                {t.contact.emailAddress}
              </a>
            </div>


            {/* Response Time */}
            <div className="card-elevated p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/50 to-accent/50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-semibold mb-2 text-foreground">
                {isArabic ? 'وقت الرد' : 'Response Time'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {isArabic ? 'عادة خلال 24 ساعة' : 'Usually within 24 hours'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    {isArabic ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder={isArabic ? 'أدخل اسمك' : 'Enter your name'}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  {isArabic ? 'الموضوع' : 'Subject'}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder={isArabic ? 'أدخل الموضوع' : 'Enter subject'}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder={isArabic ? 'أدخل رسالتك' : 'Enter your message'}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                {t.contact.send}
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-accent/10 border border-accent text-accent rounded-lg text-center font-semibold">
                  {isArabic ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
