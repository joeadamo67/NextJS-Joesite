'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary focus:outline-none"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 bg-primary pb-3 px-2 pt-2 space-y-1 sm:px-3 z-50">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary hover:bg-opacity-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium bg-accent text-white"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}