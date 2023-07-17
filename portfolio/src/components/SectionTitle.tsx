interface Props {
    title: string
}
export default function SectionTitle({ title }: Props) {
  return (
    <div className="text-2xl font-semibold flex">
        { title }
       <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-primary-black mt-4 ml-6"></span>
    </div>
  )
}
