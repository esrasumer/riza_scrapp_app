'use client'

import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import './style.css'

const images = [
  '/scrapp_app_image/hurda_demir.jpg',
  '/scrapp_app_image/bakir_hurda.jpg',
  '/scrapp_app_image/alüminyum_hurda.jpg',
  '/scrapp_app_image/kablo_hurda.jpg',
  '/scrapp_app_image/iron_scrapp.jpg',
  '/scrapp_app_image/e_kart_hurda.jpg'
]

const SwiperComponent = () => (
  <>
    <Head>
      <title>
        İstanbul Hurdacı | Hurda Demir, Bakır ve Alüminyum Hurda 
      </title>
      <meta
        name='description'
        content="İstanbul'daki hurdacılara ait en iyi hurda demir, bakır ve alüminyum görsellerini inceleyin. Hurda alım satımı ve fiyatları hakkında bilgi alabilirsiniz."
      />
      <meta
        name='keywords'
        content='Hurda Demir, Bakır Hurdası, Alüminyum Hurda, Hurda Fiyatları, İstanbul Hurdacı, Hurdacı'
      />
      <meta name='robots' content='index, follow' />
      <meta
        property='og:title'
        content='İstanbul Hurdacı | Hurda Demir, Bakır ve Alüminyum Hurda'
      />
      <meta
        property='og:description'
        content="İstanbul'daki en iyi hurdacıların sunduğu hurda demir, bakır, alüminyum ve diğer hurdaların görsellerini projeler sayfasında bulabilirsiniz."
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://rizahurdaci.com/projects' />
      <meta
        property='og:image'
        content='https://istanbulhurdaci.com/scrapp_app_image/iron_scrapp1.jpg' // Her bir görseli kullanabilirsiniz.
      />
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Gallery',
          name: 'İstanbul Hurdacı Hurda',
          description:
            'İstanbul ve çevresindeki en iyi hurdacılara ait hurda demir, bakır, alüminyum ve diğer hurdaların görselleri.',
          url: 'https://istanbulhurdaci.com/projects',
          image: '/scrapp_app_image/iron_scrapp1.jpg'
        })}
      </script>
    </Head>
    <div id='projects' className='swiper-container'>
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{ clickable: true }}
        loop
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <div className='image-wrapper'>
              <Image
                src={src}
                width={300}
                height={300}
                layout='responsive'
                alt={`İstanbul Hurdacı Hurda Örneği ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
)

export default SwiperComponent
