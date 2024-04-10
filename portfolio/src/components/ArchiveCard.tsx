import { ReactElement } from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { motion } from 'framer-motion'

import { ArchiveCardInterface } from '@/types'

export default function ArchiveCard({
  title,
  description,
  techItems,
  githubLink,
  link
}: ArchiveCardInterface): ReactElement {
  return (
    <div className="archive-card-container">
      <div className="archive-card-icons group">
        <a href={githubLink}>
          <FaRegFolder className="archive-card-icon" />
        </a>
        <a href={link}>
          <RxOpenInNewWindow className="archive-card-icon" />
        </a>
      </div>
      <div>
        <h2 className="archive-card-title">{title}</h2>
        <p className="archive-card-description">{description}</p>
      </div>
      <div className="archive-card-flex-grow"></div>
      <ul className="archive-card-technologies">
        {techItems.map((tech, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.125 }}
            key={tech.alt}
            href={tech.link}
            className="group technology-link"
          >
            <img
              alt={tech.alt}
              src={tech.src}
              width={0}
              height={0}
              className="technology-icon"
            />
            <span className="technology-name">{tech.alt}</span>
          </motion.a>
        ))}
      </ul>
    </div>
  )
}
