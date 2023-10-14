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
    <div className="archive-card-container">
      <div className="archive-card-icons group">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaRegFolder className="archive-card-icon" />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <RxOpenInNewWindow className="archive-card-icon" />
        </a>
      </div>
      <div>
        <h2 className="archive-card-title">
          {title}
        </h2>
        <p className="archive-card-description">
          {description}
        </p>
      </div>
      <div className="flex-grow -mb-3"></div>
      <ul className="archive-card-technologies">
        {listItem.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
