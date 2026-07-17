'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A0014] py-12 border-t border-magenta/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-accent text-cyan text-lg font-bold mb-4 tracking-[0.14em] uppercase">{t('aboutLTStudio')}</h3>
            <p className="text-ink-dim mb-4">
              {t('address')}
            </p>
            <div className="text-ink-dim space-y-1">
              <p>{t('hotline')}</p>
              <p>{t('whatsapp')}</p>
            </div>
          </div>

          <div>
            <h3 className="font-accent text-cyan text-lg font-bold mb-4 tracking-[0.14em] uppercase">{t('contactWithUs')}</h3>
            <div className="text-ink-dim space-y-1">
              <p>{t('emailContact')}</p>
              <p>{t('fanpage')}</p>
            </div>

            <div className="mt-6 neon-panel rounded-md p-4">
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder={t('yourName')}
                  className="w-full px-3 py-2 bg-black/40 border border-cyan/25 rounded text-ink placeholder-ink-dim focus:outline-none focus:border-cyan text-sm"
                />
                <input
                  type="tel"
                  placeholder={t('phoneNumber')}
                  className="w-full px-3 py-2 bg-black/40 border border-cyan/25 rounded text-ink placeholder-ink-dim focus:outline-none focus:border-cyan text-sm"
                />
                <input
                  type="email"
                  placeholder={t('email')}
                  className="w-full px-3 py-2 bg-black/40 border border-cyan/25 rounded text-ink placeholder-ink-dim focus:outline-none focus:border-cyan text-sm"
                />
                <textarea
                  placeholder={t('yourMessage')}
                  rows={3}
                  className="w-full px-3 py-2 bg-black/40 border border-cyan/25 rounded text-ink placeholder-ink-dim focus:outline-none focus:border-cyan text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="btn-neon w-full py-2 text-sm"
                >
                  {t('send')}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-magenta/20 mt-8 pt-8 text-center">
          <p className="text-ink-dim text-sm">
            {t('designedBy')}
          </p>
        </div>
      </div>
    </footer>
  );
}