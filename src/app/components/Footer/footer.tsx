'use client'

import Head from 'next/head'
import { useState } from 'react'
import './style.css'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  const [text, setText] = useState('İletişim')
  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Aras Hurdacı',
              description:
                'İstanbul ve Tekirdağ’da hurda demir, bakır, alüminyum ve kablo hurdası alımı yapan en yakın hurdacı.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'İstanbul',
                addressCountry: 'TR'
              },
              telephone: '+90537 026 1190',
              url: 'https://Arashurdaci.com',
              openingHours: 'Mo-Su 08:00-20:00'
            })
          }}
        />
      </Head>

      <footer>
        <div className='w-full min-h-screen flex items-center justify-center bg-secondary footerWrapper'>
          <div className='md:w-2/3 w-full px-4 text-white flex flex-col'>
            <div className='w-full text-7xl font-bold services-text' >
              <h1 className='w-full md:w-2/3'>
                Size nasıl yardımcı olabiliriz? İletişime geçin
              </h1>
            </div>
            <div className='flex mt-8 flex-col md:flex-row md:justify-between'>
              <p className='w-full md:w-2/3 text-gray-400'>
                Hurda geri dönüşümü ile doğayı koruyun, kazancınızı artırın!{' '}
              </p>
              <div className='w-44 pt-6 md:pt-0 contact-services'>
                <div
                  className='button'
                  onMouseEnter={() => setText('+90 537 026 11 90')}
                  onMouseLeave={() => setText('İletişim')}
                >
                  {text}
                  <div className='button__horizontal'></div>
                  <div className='button__vertical'></div>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex mt-24 mb-12 flex-row justify-between footerSection'>
                <Link
                  href='/#about'
                  aria-label='Hakkımızda sayfasına git'
                  className=' md:block cursor-pointer text-accent hover:text-white uppercase'
                >
                  Hakkımızda
                </Link>
                <Link
                  href='/#services'
                  aria-label='Hurdalar ve Hizmetler sayfasına git'
                  className='md:block cursor-pointer text-accent hover:text-white uppercase'
                >
                  Hizmetler
                </Link>
                <Link
                  href='/#contact'
                  aria-label='Hurda Fiyatları sayfasına git'
                  className='md:block cursor-pointer text-accent hover:text-white uppercase'
                >
                  Biz Neredeyiz?
                </Link>
                <Link
                  href='/#contact'
                  aria-label='İletişim sayfasına git'
                  className='md:block cursor-pointer text-accent hover:text-white uppercase'
                >
                  İletişim
                </Link>
              </div>
              <hr className='border-gray-600' />
              <p className='w-full text-center text-accent '>
                Copyright © 2025
                <Link
                  href='https://www.linkedin.com/in/esra-sumer/'
                  aria-label='Sümer.dev sitesine git'
                >
                  {' '}
                  sümer.dev
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
