import SectionHeading from './section-heading'

export default function AboutUs() {
  return (
    <section id='o-nas' className='py-12 bg-[#E8EDDF]'>
      <SectionHeading>O nas</SectionHeading>
      <div className='flex items-center justify-between'>
        <p className='text-3xl font-bold max-w-[600px]'>
          Profesjonalna obsługa księgowa i kadrowo-płacowa dla Twojej firmy
        </p>
        <p className='max-w-[550px]'>
          Oferujemy kompleksową obsługę księgową oraz kadrowo-płacową dla firm
          różnej wielkości - od jednoosobowych działalności po spółki prawa
          handlowego z kapitałem polskim i zagranicznym. Dostosowujemy nasze
          usługi do indywidualnych potrzeb klientów, zapewniając rzetelność,
          bezpieczeństwo oraz pełną poufność powierzonych informacji.
          <br />
          <br />
          Pracujemy na certyfikowanym oprogramowaniu księgowym, a wszystkie
          świadczone przez nas usługi są objęte ubezpieczeniem odpowiedzialności
          cywilnej. Zapraszamy do współpracy i zapoznania się z naszą ofertą!
        </p>
      </div>
    </section>
  )
}
