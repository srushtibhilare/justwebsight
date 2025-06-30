import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App