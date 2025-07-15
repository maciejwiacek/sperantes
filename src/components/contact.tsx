import SectionHeading from './section-heading'

export default function Contact() {
  return (
    <section id='kontakt' className='pb-12'>
      <SectionHeading>Kontakt</SectionHeading>

      <div className='flex items-center justify-between px-10 mb-10'>
        <p className='text-3xl font-bold max-w-[600px]'>
          Skontaktuj się z nami!
        </p>
        <p className='max-w-[550px]'>
          Masz pytania? Chętnie pomożemy!
          <br /> Napisz do nas lub zadzwoń - odpowiemy na wszelkie wątpliwości i
          doradzimy najlepsze rozwiązania księgowe dla Twojej firmy.
        </p>
      </div>

      <div className='flex items-center justify-between px-10'>
        <div className='space-y-4'>
          <section>
            <h4 className='font-bold mb-1'>Telefony</h4>
            <p>Jan Kowalski: +48 123 456 789</p>
            <p>Jan Kowalski: +48 123 456 789</p>
            <p>Jan Kowalski: +48 123 456 789</p>
          </section>

          <section>
            <h4 className='font-bold mb-1'>Dane Firmy</h4>
            <p>KRS: 0000123456</p>
            <p>NIP: 123-456-78-90</p>
          </section>

          <section>
            <h4 className='font-bold mb-1'>Email</h4>
            <p>jan@kowalski.com</p>
          </section>

          <section>
            <h4 className='font-bold mb-1'>Adres</h4>
            <p>ul. Kasztanowa 27b/3</p>
            <p>00-123 Warszawa</p>
          </section>
        </div>
      </div>
    </section>
  )
}
