import Image from 'next/image'
import ContactForm from './contact-form'

export default function Hero() {
  return (
    <div>
      <div className='relative h-[800px] w-full rounded-4xl overflow-hidden'>
        <Image
          src='/hero-image.png'
          alt='Sperantes hero image'
          className='object-cover'
          fill
          objectFit='cover'
          quality={100}
          priority
        />

        <div className='absolute inset-0 z-10 flex items-center justify-between px-40 text-white'>
          <div className='max-w-xl space-y-4'>
            <h1 className='font-bold text-5xl text-left'>
              Twoja księgowość.
              <br />
              Nasza troska.
            </h1>
            <p className='text-2xl'>
              Kompleksowa obsługa przedsiębiorstw w zakresie usług księgowych
              oraz kadrowo-płacowych.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
