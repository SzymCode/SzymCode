import { FaRegFolder } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"

interface ArchiveCardProps {
  title: string
  description: string
  listItem: string[]
  link: string
}

export default function ArchiveCard({ title, description, listItem, link }: ArchiveCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-full h-68 md:h-76 rounded-lg p-6 bg-primary-lightblue flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-primary" />
          <RxOpenInNewWindow className="text-4xl hover:text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-wide group-hover:text-primary">
            {title}
          </h2>
          <p className="text-sm mt-3 mb-4">
            {description}
          </p>
        </div>
        <ul className="text-xs mdl:text-sm text-primary-gray px-10 md:px-0 flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
