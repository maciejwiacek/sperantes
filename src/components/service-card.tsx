import { Plus } from 'lucide-react'

export default function ServiceCard() {
  return (
    <div className='bg-red-500 h-[535px] w-[370px] rounded-3xl p-6 flex justify-between items-center flex-col'>
      <button className='ml-auto bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all cursor-pointer'>
        <Plus color='white' size={30} />
      </button>
      <div>
        <h3 className='text-white font-bold text-2xl'>
          Księgowość i Rozliczenia Podatkowe
        </h3>
        <p className='text-white'>
          Kompleksowe prowadzenie ksiąg rachunkowych, KPiR i ryczałtu
          ewidencjonowanego oraz przygotowanie deklaracji podatkowych i
          rejestrów VAT.
        </p>
      </div>
    </div>
  )
}
