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

      <div className='flex flex-col items-center justify-between px-10'>
        <div className='flex align-baseline justify-between w-full'>
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

        <div className='rounded-3xl overflow-hidden shadow-lg w-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.096372570093!2d20.943103512730318!3d52.24163315668425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc835c1a0557%3A0xda4e7ccaae1bb856!2sBiuro%20rachunkowe%20Sperantes%20Sp.%20z%20o.o.!5e0!3m2!1sen!2sus!4v1752595951884!5m2!1sen!2sus'
            loading='lazy'
            className='w-full h-[400px]'
          ></iframe>
        </div>
      </div>
    </section>
  )
}
