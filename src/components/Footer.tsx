'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{t('aboutLTStudio')}</h3>
            <p className="text-gray-300 mb-4">
              {t('address')}
            </p>
            <div className="text-gray-400 space-y-1">
              <p>{t('hotline')}</p>
              <p>{t('whatsapp')}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{t('contactWithUs')}</h3>
            <div className="text-gray-400 space-y-1">
              <p>{t('emailContact')}</p>
              <p>{t('fanpage')}</p>
            </div>
            
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder={t('yourName')}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
                />
                <input
                  type="tel"
                  placeholder={t('phoneNumber')}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
                />
                <input
                  type="email"
                  placeholder={t('email')}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
                />
                <textarea
                  placeholder={t('yourMessage')}
                  rows={3}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold transition-colors"
                >
                  {t('send')}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('designedBy')}
          </p>
        </div>
      </div>
    </footer>
  );
}