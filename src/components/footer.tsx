import Image from 'next/image'
import Divider from './divider'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <section className='w-full pb-6'>
      <Divider color='bg-gray-200' />
      <div className='flex pt-6 items-center justify-between'>
        <Image
          src='/sperantes-icon.svg'
          alt='Sperantes Logo'
          width={32}
          height={32}
        />
        <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <SocialIcon
          url='https://www.facebook.com/profile.php?id=100054572824253'
          bgColor='black'
          target='_blank'
        />
      </div>
    </section>
  )
}
