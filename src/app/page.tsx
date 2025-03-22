import Head from 'next/head'
import About from './components/About/About'
import HomePage from './components/Home/HomePage'
import Contact from './components/Contact/contact'
import ContactWrapper from './components/Contact/CantactWrapper'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import SwiperComponent from './components/Projects/SwiperComponent'

export default function Home () {
  return (
    <>
      <Head>
      <title>İstanbul Hurdacı | En Yakın Hurdacı | Hurda Fiyatları</title>
        <meta
          name='description'
          content='Rıza Hurdacı olarak İstanbul ve çevresinde en kaliteli hurdacı hizmetini sunuyoruz. Hurda demir, bakır, alüminyum, kablo hurdası ve elektronik kart hurdaları alımı yapıyoruz.'
        />
        <meta
          name='keywords'
          content='İstanbul Hurdacı, En Yakın Hurdacı, Hurdacı, Hurda Demir, Bakır Hurdacı, Hurda Fiyatları, Tekirdağ Hurdacı, Maden hurda fiyatları, Çorlu Hurda, Kablo hurda, E. kart hurdaları, Alüminyum hurda'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:title'
          content='Rıza Hurdacı | Hurda Alım & Satım'
        />
        <meta
          property='og:description'
          content="İstanbul'da hurdacılık hizmeti. En iyi fiyatlarla hurda alımı yapıyoruz. En yakın hurdacı hizmeti için bize ulaşın."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://rizahurdaci.com' />{' '}
        {/* güncellenicek */}
        <meta
          property='og:image'
          content='https://rizahurdaci.com/hurda-image.jpg' //güncellenicek
        />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ScrapYard',
            name: 'Rıza Hurdacı',
            description:
              'Rıza Hurdacı olarak İstanbul ve çevresinde hurda alım satım hizmeti sunuyoruz. En iyi fiyatlarla hurda demir, bakır, alüminyum, kablo hurdası ve elektronik kart hurdaları alıyoruz.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'İstanbul',
              addressCountry: 'TR'
            },
            url: 'https://rizahurdaci.com', // güncellenicek
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+90537 026 1190',
              contactType: 'sales'
            }
          })}
        </script>
      </Head>
      <div>
        <Navbar />
        <HomePage />
        <ContactWrapper />
        <About />
        <SwiperComponent />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
