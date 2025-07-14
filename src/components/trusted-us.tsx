import Image from 'next/image'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1280px-OpenAI_Logo.svg.png',
]

export default function TrustedUs() {
  return (
    <section className='flex items-center justify-between px-10 py-8'>
      <h2 className='font-semibold text-2xl'>Zaufali nam</h2>
      <div className='w-[1050px]'>
        <LogosScroll />
      </div>
    </section>
  )
}

function LogosScroll() {
  return (
    <div className='overflow-hidden'>
      <div className='infinite-scroll gap-10 flex w-max hover:[animation-play-state:paused]'>
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index}>
            <Image
              src={logo}
              alt='Logo'
              width={100}
              height={35}
              className='h-[35px] w-auto grayscale obejct-contain'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
