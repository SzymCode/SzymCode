interface Props {
    title: string
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className="section-title-container">
        { title }
       <span className="section-title-line"></span>
    </div>
  )
}
