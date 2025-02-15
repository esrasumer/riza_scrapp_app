'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import './style.css'

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// modules
import { Pagination, Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className='w-[80%] projectWrapper'
      loop={true}
      modules={[Pagination, Navigation]}
      style={{
        '--swiper-navigation-color': '#ffffff', 
        '--swiper-pagination-color': '#ffffff', 
        '--swiper-pagination-bottom': '0px'
        }}
    >
      <SwiperSlide>
        <Image src="/scrapp_image/iron_scrapp.jpg"
         width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/scrapp_image/iron_scrapp2.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/scrapp_image/iron_scrapp3.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/scrapp_image/iron_scrapp4.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/scrapp_image/iron_scrapp5.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
