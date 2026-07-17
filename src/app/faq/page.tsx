'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function FAQ() {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What video services does LT Studio offer?",
      answer: "We produce advertising videos, TVCs, corporate and event videos, short films, and entertainment content for digital platforms."
    },
    {
      question: "How long does a video project take?",
      answer: "It depends on the scope — most projects run from a few days to a few weeks from brief to final delivery. We agree on a clear timeline with you before we start."
    },
    {
      question: "Do you handle the whole production process?",
      answer: "Yes. From concept and scripting to filming, editing and post-production, you work with one team across the entire journey."
    },
    {
      question: "Which platforms are the videos optimized for?",
      answer: "We deliver in formats optimized for YouTube, TikTok, Facebook, event screens and your website, so your content fits wherever your audience is."
    },
    {
      question: "Can you help with content strategy, not just production?",
      answer: "Yes. Beyond the finished video, we can help plan your content and communication so your brand grows over time."
    },
    {
      question: "How do I get started?",
      answer: "Just contact us with your idea. We'll discuss your goals and propose the right approach and timeline."
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className=""></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">{t('faqTitle')}</h1>
          <p className="text-xl text-ink-dim mb-8 max-w-3xl mx-auto">
            {t('faqDescription')}
          </p>
          <button className="btn-neon text-lg">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 21H5V3H13V9H19V21Z"/>
              </svg>
              {t('moreQuestion')}
            </span>
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">{t('faqSectionTitle')}</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="neon-panel rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="text-2xl">{openFAQ === index ? '−' : '+'}</span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-ink-dim">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">{t('contactWithUsTitle')}</h2>
          <p className="text-xl text-ink-dim mb-8">
            {t('contactDescription')}
          </p>
          
          <div className="neon-panel rounded-lg p-8 max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t('yourName')}
                className="w-full px-4 py-3 bg-black/40 border border-cyan/25 rounded-lg text-ink placeholder-ink-dim focus:outline-none focus:border-cyan"
              />
              <input
                type="tel"
                placeholder={t('phoneNumber')}
                className="w-full px-4 py-3 bg-black/40 border border-cyan/25 rounded-lg text-ink placeholder-ink-dim focus:outline-none focus:border-cyan"
              />
              <input
                type="email"
                placeholder={t('email')}
                className="w-full px-4 py-3 bg-black/40 border border-cyan/25 rounded-lg text-ink placeholder-ink-dim focus:outline-none focus:border-cyan"
              />
              <textarea
                placeholder={t('yourMessage')}
                rows={4}
                className="w-full px-4 py-3 bg-black/40 border border-cyan/25 rounded-lg text-ink placeholder-ink-dim focus:outline-none focus:border-cyan"
              ></textarea>
              <button
                type="submit"
                className="btn-neon w-full py-3 text-lg"
              >
                {t('send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Contact Buttons */}
      <div className="fixed right-6 bottom-6 space-y-3 z-40">
        <a href="https://www.facebook.com/LTStudioVietNam" 
           className="group block w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/25 transition-all hover:scale-110 border border-blue-500/20">
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://wa.me/84944108872" 
           className="group block w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/25 transition-all hover:scale-110 border border-green-400/20">
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
          </svg>
        </a>
        <a href="tel:+84944108872" 
           className="group block w-14 h-14 bg-magenta rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-red-500/25 transition-all hover:scale-110 border border-red-400/20">
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 