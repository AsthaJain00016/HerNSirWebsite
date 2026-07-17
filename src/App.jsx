import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
const FloatingWhatsapp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-8 w-8 fill-white"
  >
    <path d="M16.04 3C8.85 3 3 8.83 3 16.02c0 2.53.74 5 2.14 7.12L3 29l6.05-2.08a13.01 13.01 0 0 0 6.99 2.04h.01C23.2 28.96 29 23.13 29 15.94 29 8.75 23.23 3 16.04 3zm7.58 18.45c-.32.9-1.86 1.72-2.56 1.83-.66.11-1.49.16-2.4-.13-.55-.18-1.25-.41-2.16-.8-3.8-1.64-6.28-5.47-6.47-5.72-.18-.25-1.54-2.04-1.54-3.89 0-1.85.97-2.76 1.31-3.14.34-.38.74-.48.99-.48.25 0 .49 0 .71.01.23.01.53-.09.83.63.31.75 1.05 2.58 1.14 2.76.09.18.15.39.03.64-.12.25-.18.39-.37.6-.18.21-.38.47-.54.63-.18.18-.37.37-.16.73.21.36.94 1.55 2.01 2.5 1.39 1.24 2.56 1.63 2.92 1.81.36.18.57.15.78-.09.21-.25.89-1.04 1.13-1.4.23-.36.47-.3.79-.18.32.11 2.03.96 2.38 1.13.35.18.58.27.66.42.08.15.08.86-.24 1.76z" />
  </svg>
);
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Packages />
        <Gallery />
        <Testimonials />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
