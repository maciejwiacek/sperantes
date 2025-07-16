import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='fixed z-999 bg-white top-0 left-0 flex justify-between items-center w-full py-4 px-6'>
      <Link href='/' className='flex-1 relative h-[45px]'>
        <Image
          src='/sperantes-icon.svg'
          alt='Sperantes logo'
          height={45}
          width={100}
          className='object-fit h-[35px] w-auto'
        />
      </Link>

      <ul className='flex-1 flex justify-center items-center'>
        <li>
          <Button variant='link' asChild>
            <a href='#o-nas'>O nas</a>
          </Button>
        </li>

        <li>
          <Button variant='link' asChild>
            <a href='#uslugi'>Usługi</a>
          </Button>
        </li>

        <li>
          <Button variant='link' asChild>
            <a href='#oferta-cenowa'>Oferta cenowa</a>
          </Button>
        </li>
      </ul>

      <div className='flex-1 flex justify-end'>
        <Button asChild>
          <a href='#kontakt'>Kontakt</a>
        </Button>
      </div>
    </nav>
  )
}
