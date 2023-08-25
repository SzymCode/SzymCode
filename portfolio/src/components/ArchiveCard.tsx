import { FaRegFolder } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"

export interface ArchiveCardProps {
  title: string
  description: string
  listItem: string[]
  githubLink: string
  link: string
}

export default function ArchiveCard({ title, description, listItem, githubLink, link }: ArchiveCardProps) {
  return (
    <div className="w-full h-full rounded-lg p-8 bg-primary-lightblue dark:bg-primary-darker flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center mb-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaRegFolder className="text-4xl hover:text-primary dark:text-primary-lightgray dark:hover:text-primary duration-300 text-primary-black" />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <RxOpenInNewWindow className="text-4xl hover:text-primary dark:text-primary-lightgray dark:hover:text-primary duration-300" />
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-wide group-hover:text-primary -mt-1 duration-300">
          {title}
        </h2>
        <p className="text-sm mt-4 mb-2 text-primary-black dark:text-primary-lightgray">
          {description}
        </p>
      </div>
      <div className="flex-grow -mb-3"></div>
      <ul className="text-xs mdl:text-sm text-primary-gray px-10 sm:px-0 flex items-center text-center gap-6 mt-1">
        {listItem.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
