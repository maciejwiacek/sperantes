import SectionHeading from './section-heading'
import ServiceCard from './service-card'

export default function Services() {
  return (
    <section id='uslugi' className='py-12'>
      <SectionHeading>Usługi</SectionHeading>
      <div className='flex align-center justify-center gap-24'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  )
}
