import Image from 'next/image'

type ServiceCardProps = {
  title: string
  description: string
  imageUrl: string
  onClick: () => void
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className='relative h-[535px] w-[370px] group rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out'
      role='button'
      aria-label='Zobacz szczegóły usługi'
      onClick={onClick}
    >
      {/* Tło */}
      <Image
        src={imageUrl}
        alt='Service Card Background'
        fill
        className='object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out'
      />

      {/* Mask Blur */}
      <div className='blur-mask-overlay ' />

      {/* CTA: "Kliknij, aby zobaczyć więcej" */}
      <div className='absolute bottom-5 right-5 z-30 flex items-center gap-2 text-white/70 text-sm font-light group-hover:text-white transition-all duration-300 ease-in-out'>
        <span>Kliknij, aby zobaczyć więcej</span>
        <span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-1'>
          →
        </span>
      </div>

      {/* Treść */}
      <div className='absolute bottom-7 inset-0 z-20 flex items-end flex-col justify-end p-6 pointer-events-none'>
        <div>
          <h3 className='text-white font-bold text-2xl'>{title}</h3>
          <p className='text-white'>{description}</p>
        </div>
      </div>
    </div>
  )
}
