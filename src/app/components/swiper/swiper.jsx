'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Luxury Home 1',
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-2/slide-1.jpg',
  },
  {
    id: 2,
    title: 'Luxury Home 2',
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-2/slide-1.jpg',
  },
  {
    id: 3,
    title: 'Luxury Home 3',
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-2/slide-1.jpg',
  },
  {
    id: 4,
    title: 'Luxury Home 4',
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-2/slide-1.jpg',
  },
  {
    id: 5,
    title: 'Luxury Home 5',
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-2/slide-1.jpg',
  },
  {
    id: 6,
    title: 'Luxury Home 6',
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-2/slide-1.jpg',
  },
  {
    id: 7,
    title: 'Luxury Home 7',
    image: 'https://bato-web-agency.github.io/bato-shared/img/slider-2/slide-1.jpg',
  },
];

export default function BookingSlider() {
  return (
    <section className="max-w-[1560px] mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.15}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          575: { slidesPerView: 1.5 },
          992: { slidesPerView: 2 },
          1366: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex items-center min-h-[650px]">
            <div className="bg-gray-800 overflow-hidden relative">
              <a href="/" className="block h-[244px] overflow-hidden" onClick={(e) => e.preventDefault()}>
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              </a>
              <div className="p-4 text-white">
                <p>{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
