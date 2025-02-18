'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import './style.css'

const images = [
  '/scrapp_image/iron_scrapp.jpg',
  '/scrapp_image/iron_scrapp2.jpg',
  '/scrapp_image/iron_scrapp3.jpg',
  '/scrapp_image/iron_scrapp8.jpg',
  '/scrapp_image/iron_scrapp5.jpg'
]

const SwiperComponent = () => (
  <div className='swiper-container'>
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
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
              alt={`Scrap Image ${index + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default SwiperComponent
