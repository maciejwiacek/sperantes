import { ReactNode } from 'react'

type ServiceModalProps = {
  children: ReactNode
  onClose: () => void
}

export default function ServiceModal({ children, onClose }: ServiceModalProps) {
  return (
    <div
      className='fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div className='bg-white rounded-2xl p-6 max-w-lg w-full relative'>
        <button
          className='absolute top-4 right-4 text-gray-600 hover:text-black text-xl'
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
