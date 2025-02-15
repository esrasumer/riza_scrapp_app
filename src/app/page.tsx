import About from './components/About/About'
import HomePage from './components/Home/HomePage'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import SwiperComponent from './components/Projects/SwiperComponent'

export default function Home () {
  return (
    <div>
          <Navbar /> 
           <HomePage />
          <About />
          <SwiperComponent />
          <Contact />
          <Footer /> 
    </div>
  )
}
