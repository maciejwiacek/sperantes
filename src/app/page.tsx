import AboutUs from '@/components/about-us'
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
    </div>
  )
}
