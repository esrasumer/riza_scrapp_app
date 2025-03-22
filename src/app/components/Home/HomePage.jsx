import React from 'react'
import './style.css'
import Head from 'next/head'

function HomePage () {
  return (
    <>
      <Head>
        <title>
          İstanbul Hurdacı - Rıza Hurda | Hurdacı ve Hurda Fiyatları
        </title>
        <meta
          name='description'
          content="İstanbul Hurdacı Rıza Hurda ile hurda demir, bakır, alüminyum, kablo hurda ve daha fazlasını en iyi hurda fiyatları ile değerlendirin. En yakın hurdacı Tekirdağ ve Çorlu'da!"
        />
        <meta
          name='keywords'
          content='İstanbul Hurdacı, En Yakın Hurdacı, Hurdacı, Hurda Demir, Bakır Hurdacı, Hurda Fiyatları, Tekirdağ Hurdacı, Maden hurda fiyatları, Çorlu Hurda, Kablo hurda, E. kart hurdaları, alüminyum hurda'
        />
        <meta name='robots' content='index, follow' />
      </Head>
      <div className='section HomeWrapper'>
        <div className='textWrapper'>
          <h1>Eskiyen Değil, Değer Kazanan Her Şey Burada!</h1>
          <h2>
            Kullanılmayan her şeyin yeniden değerlendirildiği, çevre dostu
            çözümler sunduğumuz bir dünyada, eskiye hayat veriyor, yarına değer
            katıyoruz.
          </h2>
        </div>
      </div>
    </>
  )
}

export default HomePage
