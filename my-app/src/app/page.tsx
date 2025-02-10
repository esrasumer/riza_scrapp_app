import About from './components/About/About'
import HomePage from './components/Home/HomePage'
import Contact from './components/Contact/contact'
import Project from './components/Project/Project'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home () {
  return (
    <div>
          <Navbar />
          <HomePage />
          <About />
          <Project />
          <Contact />
          <Footer />
    </div>
  )
}
