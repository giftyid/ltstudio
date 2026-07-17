'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden scanlines bg-bg">
        {/* Nền: quầng neon điện ảnh (ánh sáng trong tranh, không phải UI glow) */}
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute inset-0" style={{background: 'radial-gradient(120% 80% at 50% -10%, rgba(255,0,110,0.22), transparent 55%), radial-gradient(90% 70% at 85% 110%, rgba(0,255,255,0.16), transparent 55%)'}}></div>
          {/* sao lấp lánh — vị trí DETERMINISTIC (tránh hydration mismatch) */}
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="spark"
              style={{
                left: `${(i * 37 + 11) % 100}%`,
                top: `${(i * 53 + 7) % 100}%`,
                animationDelay: `${(i % 7) * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 hero-enter">
          <div className="text-center max-w-6xl mx-auto px-4">
           <div className="mb-8 neon-frame rounded-lg overflow-hidden inline-block" style={{"--i": 0} as React.CSSProperties}>
             <Image
               src="/banner.jpg"
               alt="LT Studio"
               width={1707}
               height={400}
               className="h-auto max-w-full object-cover object-center block"
               priority
             />
           </div>
            <h1 className="mb-6" style={{"--i": 1} as React.CSSProperties}>
              <span className="block font-accent text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.12em] text-ink rgb-split">{t('heroTitle')}</span>
              <span className="block mt-4 text-lg md:text-2xl text-magenta glow-magenta font-semibold">{t('heroSubtitle')}</span>
            </h1>

            <div style={{"--i": 2} as React.CSSProperties}>
            <Link href="/contact" className="btn-neon inline-block text-lg">
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                {t('releaseFirstSingle')}
              </span>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">{t('aboutUs')}</h2>
              <p className="text-lg text-ink-dim leading-relaxed">
                {t('aboutDescription1')}
              </p>
              <p className="text-lg text-ink-dim leading-relaxed">
                {t('aboutDescription2')}
              </p>
              <Link href="/about" className="btn-neon inline-block text-lg">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                  {t('readMore')}
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="neon-panel rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-magenta rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="text-4xl font-bold font-accent text-cyan mb-2">100+</div>
                    <div className="text-ink-dim font-medium">{t('completedProjects')}</div>
                  </div>
                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-magenta rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                      </svg>
                    </div>
                    <div className="text-4xl font-bold font-accent text-cyan mb-2">50+</div>
                    <div className="text-ink-dim font-medium">{t('clients')}</div>
                  </div>
                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-magenta rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="text-4xl font-bold font-accent text-cyan mb-2">5+</div>
                    <div className="text-ink-dim font-medium">{t('yearsExperience')}</div>
                  </div>
                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-magenta rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                      </svg>
                    </div>
                    <div className="text-4xl font-bold font-accent text-cyan mb-2">24/7</div>
                    <div className="text-ink-dim font-medium">{t('support')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Stores Section */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t('digitalStoresTitle')}</h2>
          <p className="text-xl text-ink-dim mb-12 max-w-4xl mx-auto">
            {t('digitalStoresDescription')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["YouTube", "TikTok", "Facebook", "Instagram", "Website"].map((p) => (
              <span key={p} className="font-accent px-5 py-2.5 rounded-sm border border-cyan/40 text-cyan tracking-[0.12em] uppercase text-sm hover:shadow-[0_0_18px_rgba(0,255,255,0.35)] transition-shadow">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t('findPlanTitle')}</h2>
          <p className="text-xl text-ink-dim mb-12 max-w-4xl mx-auto">
            {t('findPlanDescription')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold font-accent text-cyan glow-cyan mb-2">157</div>
              <div className="text-ink-dim uppercase tracking-wide">{t('youtubeChannels')}</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold font-accent text-cyan glow-cyan mb-2">63</div>
              <div className="text-ink-dim uppercase tracking-wide">{t('employees')}</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold font-accent text-cyan glow-cyan mb-2">219</div>
              <div className="text-ink-dim uppercase tracking-wide">{t('millionViews')}</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold font-accent text-cyan glow-cyan mb-2">9</div>
              <div className="text-ink-dim uppercase tracking-wide">{t('partnerCountries')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">{t('ourServices')}</h2>
            <p className="text-xl text-ink-dim max-w-3xl mx-auto">
              {t('servicesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group neon-panel rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 border border-white/20 hover:border-cyan">
              <div className="w-16 h-16 bg-magenta rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 8v8H5V8h10m1-2H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1zM7.5 14.5l2-2.5 1.5 1.5 2.5-3L16 14.5H7.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-cyan transition-colors">{t('videoProduction')}</h3>
              <p className="text-ink-dim mb-6 leading-relaxed">
                {t('videoProductionDesc')}
              </p>
              <Link href="/contact" className="min-h-11 px-3 flex items-center justify-center mx-auto text-cyan hover:text-white font-semibold group-hover:scale-105 transition-all duration-300">
                <span>{t('learnMore')}</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>

            <div className="group neon-panel rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 border border-white/20 hover:border-cyan">
              <div className="w-16 h-16 bg-magenta rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h5v2h8v-2h5c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 12H3V5h18v10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-cyan transition-colors">{t('entertainmentVideo')}</h3>
              <p className="text-ink-dim mb-6 leading-relaxed">
                {t('entertainmentVideoDesc')}
              </p>
              <Link href="/contact" className="min-h-11 px-3 flex items-center justify-center mx-auto text-cyan hover:text-white font-semibold group-hover:scale-105 transition-all duration-300">
                <span>{t('learnMore')}</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>

            <div className="group neon-panel rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 border border-white/20 hover:border-cyan">
              <div className="w-16 h-16 bg-magenta rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-cyan transition-colors">{t('digitalMedia')}</h3>
              <p className="text-ink-dim mb-6 leading-relaxed">
                {t('digitalMediaDesc')}
              </p>
              <Link href="/contact" className="min-h-11 px-3 flex items-center justify-center mx-auto text-cyan hover:text-white font-semibold group-hover:scale-105 transition-all duration-300">
                <span>{t('learnMore')}</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Projects Section */}
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden style={{background: 'radial-gradient(70% 50% at 15% 0%, rgba(255,0,110,0.12), transparent 60%), radial-gradient(70% 50% at 90% 100%, rgba(0,255,255,0.10), transparent 60%)'}}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-magenta rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink">{t('brandProjects')}</h2>
            </div>
            <p className="text-xl text-ink-dim mb-8 max-w-4xl mx-auto">
              {t('brandProjectsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* First Playlist */}
            <div className="group neon-panel rounded-xl p-6 border border-white/20 hover:border-cyan transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-magenta rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink group-hover:text-cyan transition-colors">{t('projectPlaylist1')}</h3>
              </div>
              <a
                href="https://www.youtube.com/playlist?list=PL18ObgxsareyYndjRLrWXuiL4EOXVe-hk"
                target="_blank"
                rel="noreferrer"
                className="aspect-video rounded-md overflow-hidden neon-frame scanlines bg-black/40 flex flex-col items-center justify-center gap-4 text-cyan hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan transition-colors"
              >
                <span className="w-20 h-20 rounded-full border border-cyan/50 bg-cyan/10 flex items-center justify-center" aria-hidden>
                  <svg className="w-10 h-10 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                <span className="font-semibold">{t('openPlaylist')}</span>
              </a>
            </div>

            {/* Second Playlist */}
            <div className="group neon-panel rounded-xl p-6 border border-white/20 hover:border-cyan transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-magenta rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink group-hover:text-cyan transition-colors">{t('projectPlaylist2')}</h3>
              </div>
              <a
                href="https://www.youtube.com/playlist?list=PLaZlSfjykgJRYAPrDK4Z6Mgx_xbvMmQnt"
                target="_blank"
                rel="noreferrer"
                className="aspect-video rounded-md overflow-hidden neon-frame scanlines bg-black/40 flex flex-col items-center justify-center gap-4 text-cyan hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan transition-colors"
              >
                <span className="w-20 h-20 rounded-full border border-cyan/50 bg-cyan/10 flex items-center justify-center" aria-hidden>
                  <svg className="w-10 h-10 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                <span className="font-semibold">{t('openPlaylist')}</span>
              </a>
            </div>

            {/* Third Playlist */}
            <div className="group neon-panel rounded-xl p-6 border border-white/20 hover:border-cyan transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-magenta rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink group-hover:text-cyan transition-colors">{t('projectPlaylist3')}</h3>
              </div>
              <a
                href="https://www.youtube.com/playlist?list=PL6k9fllYLnM-LdX2MYUmNDFLEiy_ywfnK"
                target="_blank"
                rel="noreferrer"
                className="aspect-video rounded-md overflow-hidden neon-frame scanlines bg-black/40 flex flex-col items-center justify-center gap-4 text-cyan hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan transition-colors"
              >
                <span className="w-20 h-20 rounded-full border border-cyan/50 bg-cyan/10 flex items-center justify-center" aria-hidden>
                  <svg className="w-10 h-10 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                <span className="font-semibold">{t('openPlaylist')}</span>
              </a>
            </div>

            {/* Fourth Playlist */}
            <div className="group neon-panel rounded-xl p-6 border border-white/20 hover:border-cyan transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-magenta rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink group-hover:text-cyan transition-colors">{t('projectPlaylist4')}</h3>
              </div>
              <a
                href="https://www.youtube.com/playlist?list=UULFnbbGVLEKgBnwGxHro0eD1w"
                target="_blank"
                rel="noreferrer"
                className="aspect-video rounded-md overflow-hidden neon-frame scanlines bg-black/40 flex flex-col items-center justify-center gap-4 text-cyan hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan transition-colors"
              >
                <span className="w-20 h-20 rounded-full border border-cyan/50 bg-cyan/10 flex items-center justify-center" aria-hidden>
                  <svg className="w-10 h-10 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                <span className="font-semibold">{t('openPlaylist')}</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://youtube.com/@bonbonmedia9360"
              target="_blank"
              rel="noreferrer"
              className="btn-neon inline-block text-lg"
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                {t('viewAllProjects')}
              </span>
            </a>
          </div>
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
