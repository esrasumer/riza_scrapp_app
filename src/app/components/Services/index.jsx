'use client'

import React from 'react'
import Image from 'next/image' // Next.js Image bileşeni
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import './style.css'

const hurdaItems = [
  {
    name: 'Demir Hurda',
    img: '/Images_scrapp_app/demir_hurda.jpg',
    comment:
      'Demir hurdalarınızı en iyi fiyatlarla değerlendiriyoruz. İnşaat projelerinden kalan demir parçaları, eski makine ekipmanları ya da sanayi atıkları fark etmeksizin, tüm demir hurdalarınızı profesyonel ekibimizle topluyor ve geri dönüşüm sürecine dahil ediyoruz. Hem çevreye katkı sağlıyor hem de size kazanç sunuyoruz. Hurdalarınızı bize teslim ederek güvenilir bir hizmet alabilirsiniz.'
  },
  {
    name: 'Plastik Hurda',
    img: '/Images_scrapp_app/plastik.jpg',
    comment:
      'Plastik hurdalarınızı çevreye duyarlı bir şekilde topluyor ve geri dönüşümle yeniden hayata kazandırıyoruz. Pet şişelerden plastik ambalajlara, sanayi tipi plastik atıklardan evsel kullanımdan kalan malzemelere kadar geniş bir yelpazede hizmet sunuyoruz. Uzman ekibimizle hurdalarınızı yerinde değerlendiriyor, size en iyi fiyat teklifini sunarak hem doğayı korumanıza hem de ekonomik kazanç elde etmenize yardımcı oluyoruz.'
  },
  {
    name: 'Bakır Hurda',
    img: '/Images_scrapp_app/bakir.jpg',
    comment:
      'Bakır hurdalarınızı değerinde alıyor, geri dönüşümle ekonomiye yeniden kazandırıyoruz. Elektrik kabloları, tesisat boruları, eski bakır eşyalar veya sanayi atıkları gibi her türlü bakır hurdanız için profesyonel bir hizmet sunuyoruz. Hurdalarınızı titizlikle değerlendiriyor, size en uygun fiyat teklifini hazırlıyoruz. Bakırın yüksek değeriyle tanınan bir malzeme olduğunu biliyoruz ve bu yüzden sizin için en iyi kazancı sağlamayı hedefliyoruz.'
  },
  {
    name: 'Hurda Karton - Kağıt',
    img: '/Images_scrapp_app/karton_hurda.jpg',
    comment:
      'Karton ve kağıt hurdalarınızı hızlı, güvenilir ve çevre dostu yöntemlerle topluyoruz. Ofislerde biriken eski evraklar, ambalaj kartonları, fabrika üretim atıkları veya evinizden çıkan kağıt malzemeler için bizimle iletişime geçebilirsiniz. Geri dönüşümle hem doğal kaynakları koruyor hem de size değerinde bir hizmet sunuyoruz. Hurdalarınızı değerlendirmek için profesyonel ekibimiz her zaman hazır!'
  },
  {
    name: 'Sarı Metal Hurda',
    img: '/Images_scrapp_app/sarı_hurda.webp',
    comment:
      'Pirinç ve diğer sarı metal hurdalarınızı güvenilir bir şekilde topluyor, geri dönüşüm sürecine dahil ediyoruz. Musluklar, vanalar, dekoratif eşyalar ya da sanayi tipi sarı metal atıklarınız için bize ulaşabilirsiniz. Hurdalarınızı detaylı bir şekilde analiz ederek piyasa koşullarına göre adil bir fiyatlandırma yapıyoruz. Çevre dostu yaklaşımımız ve kaliteli hizmet anlayışımızla, hurda değerlendirme sürecinde yanınızdayız. '
  },
  {
    name: 'Hurda Akü',
    img: '/Images_scrapp_app/akü.jpg',
    comment:
      'Kullanılmış akülerinizi güvenli ve çevre dostu yöntemlerle topluyor, geri dönüşümle doğaya zarar vermeden değerlendiriyoruz. Araç akülerinden endüstriyel akülere kadar her türlü hurda akünüzü kabul ediyoruz. Uzman ekibimiz, akülerinizi yerinde inceleyerek size en uygun fiyat teklifini sunar. Hem çevre bilinciyle hareket etmek hem de hurdalarınızdan gelir elde etmek istiyorsanız, bizimle iletişime geçmekten çekinmeyin.'
  },
  {
    name: 'Kablo Hurda',
    img: '/scrapp_app_image/kablo_hurda.jpg',
    comment:
      'Her türlü kablo hurdanızı değerinde satın alıyor, geri dönüşümle yeniden kullanılabilir hale getiriyoruz. Elektrik tesisatından kalan izoleli kablolar, soyulmuş bakır kablolar ya da sanayi tipi kablo atıkları fark etmez; hepsini profesyonel bir şekilde değerlendiriyoruz. Hurdalarınızı toplamak için hızlı bir hizmet sunuyor, size piyasa koşullarına uygun en iyi fiyatları garanti ediyoruz. Kablo hurdalarınızı değerlendirmek için doğru yerdesiniz! '
  },
  {
    name: 'İnşaat Hurdası',
    img: '/Images_scrapp_app/insaat-demiri.jpg',
    comment:
      'İnşaat projelerinizden arta kalan hurda malzemeleri topluyor, yerinde değerlendirme ile size özel çözümler sunuyoruz. Demir, çelik, alüminyum ya da diğer metal atıklarınızı güvenilir bir şekilde geri dönüştürüyoruz. İnşaat sahalarından çıkan her türlü hurdayı profesyonel ekibimizle analiz ediyor, size en iyi fiyat teklifini sunarak hem zaman tasarrufu sağlıyor hem de kazanç elde etmenize yardımcı oluyoruz. Büyük ya da küçük ölçekli projeleriniz için bizimle iletişime geçin.'
  },  {
    name: 'Alüminyum Hurda',
    img: '/scrapp_app_image/alüminyum_hurda.jpg',
    comment:
      'Alüminyum hurdalarınızı yüksek standartlarda geri dönüştürüyor ve piyasa koşullarına uygun en iyi fiyatları sunuyoruz. Alüminyum profiller, levhalar, kapı-pencere sistemleri ya da sanayi tipi alüminyum atıklarınızı değerlendirmek için doğru adrestesiniz. Deneyimli ekibimiz, hurdalarınızı yerinde inceleyerek size hızlı bir çözüm sunar. Hem çevreye katkıda bulunmak hem de hurdalarınızdan kazanç sağlamak için bizimle iletişime geçin.'
  },
]

export default function App () {
  return (
    <>
    <p className='pt-8 text-lg aboutWrapper services-title'>-Hizmetlerimiz-</p>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
        1440: { slidesPerView: 4, spaceBetween: 50 }
      }}
      modules={[Pagination]}
      className='mySwiper'
      id='services'
    >
      {hurdaItems.map((item, index) => (
        <SwiperSlide key={index} className='slide-item'>
          <div className='image-container'>
            <Image src={item.img} alt={item.name} width={300} height={200} />
          </div>
          <div>
            <p className='text-2xl p-2.5'>{item.name}</p>
            <p>{item.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}
