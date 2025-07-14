export default function SectionHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h3 className='text-2xl text-accent font-bold text-center pb-12'>
      {children}
    </h3>
  )
}
