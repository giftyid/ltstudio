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
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">LT Studio</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-semibold transition-colors ${
                isActive('/') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActive('/about') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('about')}
            </Link>
            <Link 
              href="/news" 
              className={`transition-colors ${
                isActive('/news') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('news')}
            </Link>
            <Link 
              href="/faq" 
              className={`transition-colors ${
                isActive('/faq') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('faq')}
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive('/contact') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
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
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
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
              className="text-white hover:text-blue-400"
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
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block px-3 py-2 ${
                isActive('/') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 ${
                isActive('/about') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('about')}
            </Link>
            <Link 
              href="/news" 
              className={`block px-3 py-2 ${
                isActive('/news') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('news')}
            </Link>
            <Link 
              href="/faq" 
              className={`block px-3 py-2 ${
                isActive('/faq') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
              }`}
            >
              {t('faq')}
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 ${
                isActive('/contact') ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
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
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
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