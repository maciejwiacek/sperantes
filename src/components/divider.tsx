type DividerProps = {
  color?: string
}

export default function Divider({ color }: DividerProps) {
  return <div className={`${color || 'bg-white'} h-[1px] w-full`} />
}
