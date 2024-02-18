import { motion } from "framer-motion"

import { FaRegFolder } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"
import { ArchiveCardProps } from "@/utils/handleProps";

export default function ArchiveCard({ title, description, techItem, githubLink, link }: ArchiveCardProps) {
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
        {techItem.map((tech, index) => (
          <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.125 }}
              key={tech.alt}
              href={tech.link}
              className="group technology-link"
          >
             <img alt={tech.alt} src={tech.src} width={0} height={0} className="technology-icon" />
             <span className="technology-name">
               {tech.alt}
             </span>
          </motion.a>
        ))}
      </ul>
    </div>
  )
}
