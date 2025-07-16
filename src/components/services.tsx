'use client'

import { useState } from 'react'
import SectionHeading from './section-heading'
import ServiceCard from './service-card'
import ServiceModal from './service-modal'

const serviceData = [
  {
    title: 'Księgowość i Rozliczenia Podatkowe',
    description:
      'Kompleksowe prowadzenie ksiąg rachunkowych, KPiR i ryczałtu ewidencjonowanego oraz przygotowanie deklaracji podatkowych i rejestrów VAT.',
    modalContent: (
      <>
        <p>Rozbudowany opis usługi...</p>
        <ul>
          <li>Pełna obsługa podatkowa</li>
          <li>Wsparcie przy kontroli</li>
        </ul>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Kadry i Płace',
    description:
      'Obsługa umów o pracę i cywilnoprawnych, rejestracja w ZUS, przygotowanie listy płac i deklaracji ZUS oraz prowadzenie dokumentacji kadrowej.',
    modalContent: (
      <>
        <p>Rozbudowany opis usługi...</p>
        <ul>
          <li>Pełna obsługa podatkowa</li>
          <li>Wsparcie przy kontroli</li>
        </ul>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1582572186057-0e74d3c715ea?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Raportowanie i Sprawozdania Finansowe',
    description:
      'Sporządzanie sprawozdań finansowych, raportów zarządczych i statystycznych oraz rocznych deklaracji pracowniczych (PIT-11).',
    modalContent: (
      <>
        <p>Rozbudowany opis usługi...</p>
        <ul>
          <li>Pełna obsługa podatkowa</li>
          <li>Wsparcie przy kontroli</li>
        </ul>
      </>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1544655152-4dc3bc4df059?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<
    null | (typeof serviceData)[0]
  >(null)

  return (
    <section id='uslugi' className='py-12'>
      <SectionHeading>Usługi</SectionHeading>

      <div className='flex justify-between flex-wrap px-10'>
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            onClick={() => setActiveService(service)}
          />
        ))}
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal onClose={() => setActiveService(null)}>
          <h2 className='text-2xl font-bold mb-4'>{activeService.title}</h2>
          {activeService.modalContent}
        </ServiceModal>
      )}
    </section>
  )
}
