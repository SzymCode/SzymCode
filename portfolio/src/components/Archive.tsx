import { ReactElement } from 'react'
import { motion } from 'framer-motion'

import { archiveCards } from '@/constants'
import { ArchiveCard } from '@/components'
import { HandleShowMore } from '@/utils'

export default function Archive(): ReactElement {
  const { visibleCardsCount, handleShowMoreClick } = HandleShowMore()

  return (
    <section id="projects">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="archive-container"
      >
        <div className="archive-div">
          <h2 className="archive-header-1">Some things I have built</h2>
          <p className="archive-header-2">view the archive</p>
        </div>
        <div className="archive-cards-container">
          {archiveCards.slice(0, visibleCardsCount).map((cardData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ArchiveCard
                title={cardData.title}
                description={cardData.description}
                techItems={cardData.techItems}
                githubLink={cardData.githubLink}
                link={cardData.link}
              />
            </motion.div>
          ))}
        </div>
        <div className="archive-button-container">
          <button
            className="my-button"
            onClick={() => {
              handleShowMoreClick(archiveCards)
            }}
          >
            {visibleCardsCount < archiveCards.length
              ? 'Show More'
              : 'Show Less'}
          </button>
        </div>
      </motion.div>
    </section>
  )
}
