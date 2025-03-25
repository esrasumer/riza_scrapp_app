'use client'

import Head from 'next/head'
import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

function About () {
  return (
    <>
      <Head>
        <title>
          İstanbul Hurdacı - Aras Hurda | Hurda Fiyatları ve Geri Dönüşüm
        </title>
        <meta
          name='description'
          content="İstanbul Hurdacı Aras Hurda olarak hurda demir, bakır, alüminyum, kablo ve maden hurda fiyatları ile en yakın hurdacı hizmetini sunuyoruz. Tekirdağ ve Çorlu'da profesyonel hurdacılık."
        />
        <meta
          name='keywords'
          content='İstanbul Hurdacı, En Yakın Hurdacı, Hurdacı, Hurda Demir, Bakır Hurdacı, Hurda Fiyatları, Tekirdağ Hurdacı, Maden hurda fiyatları, Çorlu Hurda, Kablo hurda, E. kart hurdaları, alüminyum hurda'
        />
        <meta name='robots' content='index, follow' />
      </Head>
      <div id='about' className='aboutWrapperSection'>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='pt-8 text-lg aboutWrapper'>Hakkımızda</h2>
        <p className='aboutText'>
          Aras Hurda olarak, hurdacılık sektöründe güvenilir ve profesyonel
          hizmet sunarak, geri dönüşüm sürecine katkıda bulunuyoruz. Hurda
          alım-satım süreçlerinde şeffaf ve müşteri odaklı yaklaşımımızla,
          sektördeki en iyi fiyatlandırma ve hizmet kalitesini sağlamayı
          hedefliyoruz. Geri dönüşüm, sadece ekonomik kazanç sağlamakla kalmaz,
          aynı zamanda doğaya ve çevreye olan sorumluluğumuzu yerine getirmemize
          de yardımcı olur. Bu bilinçle hareket ederek, kullanılmayan metal,
          plastik, kâğıt ve diğer geri dönüştürülebilir malzemeleri en verimli
          şekilde değerlendiriyoruz. Müşterilerimize en iyi deneyimi sunmak için
          teknolojik altyapımızı sürekli geliştiriyor, lojistik süreçlerimizi
          hızlandırıyor ve hurda toplama işlemlerini kolaylaştırıyoruz.
          Evinizden, iş yerinizden veya sanayi alanlarından hurdalarınızı
          alıyor, değerinde fiyatlandırma yaparak hızlı ve güvenli bir şekilde
          ödeme gerçekleştiriyoruz. Geri dönüşüme katkıda bulunmak ve
          hurdalarınızı en iyi fiyatlarla değerlendirmek için bizimle iletişime
          geçin.Aras Hurda olarak, sizlere profesyonel ve güvenilir hizmet
          sunmaktan memnuniyet duyarız.
        </p>
      </motion.div>
    </div>
    </>
  )
}

export default About
