import About from './components/About/About'
import HomePage from './components/Home/HomePage'
import Contact from './components/Contact/contact'
import ContactWrapper from './components/Contact/CantactWrapper'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import SwiperComponent from './components/Projects/SwiperComponent'

export default function Home () {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ContactWrapper />
      <About />
      <SwiperComponent />
      <Contact />
      <Footer />
    </div>
  )
}
