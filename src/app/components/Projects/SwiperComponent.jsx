'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './style.css';

const images = [
  '/scrapp_image/iron_scrapp.jpg',
  '/scrapp_image/iron_scrapp2.jpg',
  '/scrapp_image/iron_scrapp3.jpg',
  '/scrapp_image/iron_scrapp4.jpg',
  '/scrapp_image/iron_scrapp5.jpg'
];

const SwiperComponent = () => (
  <div className='esra'>
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    loop
    modules={[Pagination, Navigation]}
    className='w-[80%] projectWrapper'
    style={{
      '--swiper-navigation-color': '#ffffff',
      '--swiper-pagination-color': '#ffffff',
      '--swiper-pagination-bottom': '0px'
    }}
  >
  {images.map((src, index) => (
      <SwiperSlide key={index} className='sümer'>
        <Image src={src} width={300} height={200} layout='responsive' alt={`Scrap Image ${index + 1}`} />
      </SwiperSlide>
    ))}
  </Swiper>
  </div> 
);

export default SwiperComponent;
