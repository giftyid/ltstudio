'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className=""></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan text-sm uppercase tracking-wide mb-2">{t('aboutCompany')}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8">{t('aboutPageTitle')}</h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group neon-panel rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-magenta rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h5v2h8v-2h5c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 12H3V5h18v10z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold font-accent text-cyan mb-2">500+</div>
              <div className="text-ink-dim font-medium">{t('youtubeChannels')}</div>
            </div>
            <div className="group neon-panel rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-magenta rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold font-accent text-cyan mb-2">200+</div>
              <div className="text-ink-dim font-medium">{t('employees')}</div>
            </div>
            <div className="group neon-panel rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-magenta rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold font-accent text-cyan mb-2">700M+</div>
              <div className="text-ink-dim font-medium">{t('millionViews')}</div>
            </div>
            <div className="group neon-panel rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-magenta rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold font-accent text-cyan mb-2">30+</div>
              <div className="text-ink-dim font-medium">{t('partnerCountries')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="neon-panel rounded-xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-magenta rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">{t('aboutLTStudioTitle')}</h2>
              <p className="text-lg text-ink-dim leading-relaxed">
                {t('aboutLTStudioDesc1')}
              </p>
              <p className="text-lg text-ink-dim leading-relaxed">
                {t('aboutLTStudioDesc2')}
              </p>
              <button className="btn-neon text-lg">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  {t('getStarted')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-ink-dim leading-relaxed">
                {t('missionDesc1')}
              </p>
              <p className="text-lg text-ink-dim leading-relaxed">
                {t('missionDesc2')}
              </p>
              <button className="btn-neon text-lg">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  {t('releaseFirstSingleNow')}
                </span>
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl">
              <div className="w-full h-64 neon-panel rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 bg-magenta rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2zm5.3 4.65c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41C17.2 9.37 18 10.64 18 12c0 1.36-.8 2.63-2.11 3.94-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0C19.13 15.52 20 13.84 20 12s-.87-3.52-2.7-5.35zM4 9v6h4l5 5V4L8 9H4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-ink text-center mb-16">{t('whyChooseLTStudio')}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">{t('globalReach')}</h3>
                  <p className="text-ink-dim">
                    {t('globalReachDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">{t('fairCompensation')}</h3>
                  <p className="text-ink-dim">
                    {t('fairCompensationDesc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">{t('userFriendlyPlatform')}</h3>
                  <p className="text-ink-dim">
                    {t('userFriendlyPlatformDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">{t('supportiveCommunity')}</h3>
                  <p className="text-ink-dim">
                    {t('supportiveCommunityDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">{t('anyQuestions')}</h2>
          <button className="btn-neon text-lg">
            <span className="flex items-center">
              <svg className="w-6 h-6 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              {t('contactLTStudioHere')}
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
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
