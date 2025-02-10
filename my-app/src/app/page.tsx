import About from './components/About/About'
import HomePage from './components/Home/HomePage'
import Contact from './components/Contact/contact'
import Project from './components/Project/Project'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'

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
