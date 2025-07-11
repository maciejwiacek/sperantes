import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='flex justify-between items-center w-full py-4'>
      <Link href='/' className='relative h-[45px]'>
        <Image
          src='/sperantes-icon.svg'
          alt='Sperantes logo'
          height={45}
          width={100}
          className='object-fit h-[35px] w-auto'
        />
      </Link>

      <ul className='flex'>
        <Button variant='link' asChild>
          <a href='#o-nas'>O nas</a>
        </Button>

        <Button variant='link' asChild>
          <a href='#uslugi'>Usługi</a>
        </Button>

        <Button variant='link' asChild>
          <a href='#oferta-cenowa'>Oferta cenowa</a>
        </Button>
      </ul>

      <Button asChild>
        <a href='#kontakt'>Kontakt</a>
      </Button>
    </nav>
  )
}
