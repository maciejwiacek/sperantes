import AboutUs from '@/components/about-us'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import Services from '@/components/services'
import TrustedUs from '@/components/trusted-us'

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <TrustedUs />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
