import { ReactElement } from 'react'
import { motion } from 'framer-motion'

import { favouriteTechnologies } from '@/constants'
import { SectionTitle } from '@/components'

export default function AboutMe(): ReactElement {
  return (
    <section id="about" className="about-me-section">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.8 }}
      >
        <SectionTitle title="About Me" />
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 1 }}
        className="about-me-description-container"
      >
        <div className="about-me-description">
          Greetings! I am Szymon Radomski, a
          <span className="text-primary"> passionate web developer </span> with
          a deep curiosity for technology and its possibilities. Always seeking
          opportunities to expand my knowledge and stay up-to-date with the
          latest trends and best practices. If you are looking for a passionate
          developer who is committed to delivering high-quality solutions, I
          would be delighted to collaborate on projects and contribute to your
          team.
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="technologies-container"
      >
        <div>
          Favourite technologies
          <div className="technologies-list">
            {favouriteTechnologies.map((tech, index) => (
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.125
                }}
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
          </div>
        </div>
      </motion.div>
    </section>
  )
}
