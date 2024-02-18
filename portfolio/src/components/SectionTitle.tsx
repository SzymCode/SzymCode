import { SectionTitleProps } from "@/utils/handleProps";

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title-container">
        { title }
       <span className="section-title-line"></span>
    </div>
  )
}
