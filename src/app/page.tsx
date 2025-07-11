import AboutUs from '@/components/about-us'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import TrustedUs from '@/components/trusted-us'

export default function Home() {
  return (
    <div className='mx-6'>
      <Navigation />
      <Hero />
      <TrustedUs />
      <AboutUs />
    </div>
  )
}
