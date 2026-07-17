'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0014]/90 backdrop-blur-md border-b border-magenta/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 neon-frame rounded-sm flex items-center justify-center bg-[#0A0014]">
                <svg className="w-6 h-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
              </div>
              <span className="font-accent text-ink text-xl font-bold tracking-[0.22em] glow-cyan">LT&nbsp;STUDIO</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-semibold transition-colors ${
                isActive('/') ? 'text-cyan' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActive('/about') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('about')}
            </Link>
            <Link 
              href="/news" 
              className={`transition-colors ${
                isActive('/news') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('news')}
            </Link>
            <Link 
              href="/faq" 
              className={`transition-colors ${
                isActive('/faq') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('faq')}
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive('/contact') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('contact')}
            </Link>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-600 pl-4">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'vi' 
                    ? 'bg-magenta text-[#0A0014] font-bold'
                    : 'text-ink-dim hover:text-ink hover:bg-white/5'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-magenta text-[#0A0014] font-bold'
                    : 'text-ink-dim hover:text-ink hover:bg-white/5'
                }`}
              >
                EN
              </button>
            </div>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-11 h-11 -mr-2 flex items-center justify-center text-ink-dim hover:text-magenta focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
              aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-[#0A0014]/97 border-t border-magenta/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block px-3 py-2 ${
                isActive('/') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 ${
                isActive('/about') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('about')}
            </Link>
            <Link 
              href="/news" 
              className={`block px-3 py-2 ${
                isActive('/news') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('news')}
            </Link>
            <Link 
              href="/faq" 
              className={`block px-3 py-2 ${
                isActive('/faq') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('faq')}
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 ${
                isActive('/contact') ? 'text-cyan font-semibold' : 'text-ink-dim hover:text-magenta'
              }`}
            >
              {t('contact')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-2 px-3 py-2">
              <span className="text-gray-300 text-sm">Language:</span>
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'vi' 
                    ? 'bg-magenta text-[#0A0014] font-bold'
                    : 'text-ink-dim hover:text-ink hover:bg-white/5'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-magenta text-[#0A0014] font-bold'
                    : 'text-ink-dim hover:text-ink hover:bg-white/5'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
