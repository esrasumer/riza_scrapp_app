'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import './style.css';

// Örnek NAVBAR_LINKS (contants.js'den geldiğini varsayıyorum)
const NAVBAR_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hurdalar', label: 'İstanbul Hurdacı' },
  { href: '/hurda-fiyatlari', label: 'Hurda Fiyatları' },
  { href: '/hurdalar/demir', label: 'Hurda Demir' },
  { href: '/hurdalar/bakir', label: 'Bakır Hurdacı' },
  { href: '/iletisim', label: 'En Yakın Hurdacı' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [nav, setNav] = useState(false);
  const lastScrollY = useRef(0);

  // Logo küçültme için scroll efekti
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar gizleme/gösterme için scroll efekti
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY.current || currentScrollY <= 0);
      lastScrollY.current = Math.max(currentScrollY, 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <header className="sectionWrapper">
      <nav
        className={`navbarContainer ${isVisible ? 'visible' : 'hidden'}`}
        role="navigation"
        aria-label="Ana Menü"
      >
        <div className="navbarMenuWrapper">
          {/* Logo */}
          <Link href="/" aria-label="Rıza Hurdacı Ana Sayfasına Git">
            <Image
              src="/rıza_hurdacı.png"
              alt="Rıza Hurdacı İstanbul Logo"
              width={100}
              height={100}
              className={`LogoContiner cursor-pointer ${isScrolled ? 'shrink' : ''}`}
              priority
            />
          </Link>

          {/* Hamburger Menü */}
          <button
            className="menuLogo"
            onClick={handleNav}
            aria-label="Mobil navigasyon menüsünü aç"
            aria-expanded={nav}
            aria-controls="mobile-menu"
          >
            <MenuOutlined size={25} />
          </button>

          {/* Masaüstü Menü */}
          <ul className="desktopMenu hidden md:flex space-x-6">
            {NAVBAR_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-label={`${link.label} sayfasına git`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobil Menü */}
      <div
        id="mobile-menu"
        className={`fixed top-0 h-full w-[75%] sm:w-[60%] md:w-[45%] bg-slate-50 dark:bg-slate-800 dark:text-white p-10 z-[1000] transition-all duration-300 ${
          nav ? 'left-0' : 'left-[-100%]'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil Navigasyon Menüsü"
      >
        <div className="flex w-full items-center pt-3">
          <button
            onClick={handleNav}
            className="closeIcon rounded-full shadow-lg ml-auto shadow-gray-400 p-3 cursor-pointer text-black dark:bg-white"
            aria-label="Mobil navigasyon menüsünü kapat"
          >
            <CloseOutlined />
          </button>
        </div>

        <ul className="py-4 flex flex-col uppercase">
          {NAVBAR_LINKS.map((link) => (
            <li
              key={link.href}
              onClick={() => setNav(false)}
              className="py-4 text-sm text-black dark:text-white"
            >
              <Link href={link.href} aria-label={`${link.label} sayfasına git`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;