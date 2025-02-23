'use client'

import React, { useState,useEffect,useRef  } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { RxHamburgerMenu } from 'react-icons/rx'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import NavbarMenu from './NavbarMenu'
import './style.css'
import { NAVBAR_LINKS } from './contants.js'



function Navbar () {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);  // Sayfa 50px'den fazla kaydırıldığında logo küçülecek
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scroll down - hide navbar
        setIsVisible(false);
      } else {
        // Scroll up - show navbar
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY; // Prevent negative scroll value
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='sectionWrapper'>
      <nav
        className={`navbarContainer ${isVisible ? 'visible' : 'hidden'}`}
        role='navigation'
        aria-label='Main Navigation'
      >
        <div className='navbarMenuWrapper'>
          {/* Logo */}
          <Link href='/' aria-label='Navigate to Home'>
            <Image
              src='/rıza_hurdacı.png'
              alt='rıza hurdacı Logo'
              width={100}
              height={100}
              className={`LogoContiner cursor-pointer ${isScrolled ? 'shrink' : ''}`}
              priority
            />
          </Link>

          {/* Hamburger Menu */}
          <div
            className='menuLogo'
            onClick={handleNav}
            aria-label='Toggle navigation menu'
            role='button'
            tabIndex={0}
          >
            {/* <RxHamburgerMenu size={25} /> */}
            <MenuOutlined size={25}/>
          </div>

          {/* Desktop Menu */}
          <NavbarMenu />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-slate-50 dark:bg-slate-800 dark:text-white p-10 z-[1000]'
            : 'fixed left-[-100%] top-0 p-10 bg-slate-50 dark:bg-slate-800'
        }`}
        role='dialog'
        aria-modal='true'
        aria-labelledby='mobile-menu-title'
      >
        <div className='flex w-full items-center pt-3'>
          {/* Close Button */}
          <button
            onClick={handleNav}
            className='closeIcon rounded-full shadow-lg ml-auto shadow-gray-400 p-3 cursor-pointer text-black dark:bg-white'
            aria-label='Close navigation menu'
          >
            <CloseOutlined />
          </button>
        </div>

        <div className='py-4 flex flex-col'>
          <h2 id='mobile-menu-title' className='sr-only'>
            Mobile Navigation Menu
          </h2>
          <ul className='uppercase'>
            {NAVBAR_LINKS.map(link => (
              <li
                key={link.href}
                onClick={() => setNav(false)}
                className='py-4 text-sm text-black dark:text-white'
              >
                <Link href={link.href}>
                  <div aria-label={`Navigate to ${link.label}`}>
                    {link.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
