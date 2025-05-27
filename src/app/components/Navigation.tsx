'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Trang chủ', id: 'home' },
    { href: '/about', label: 'Về chúng tôi', id: 'about' },
    { href: '#services', label: 'Dịch vụ', id: 'services' },
    { href: '/contact', label: 'Liên hệ', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              LT Studio
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-400 font-semibold'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 text-sm">
              <Phone size={16} className="text-gray-300" />
              <span className="text-gray-300">0944.108.872</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block px-3 py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-400 font-semibold'
                    : 'text-white hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 