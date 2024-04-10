import { ReactElement } from 'react'
import { motion } from 'framer-motion'

export default function ContactMe(): ReactElement {
  return (
    <motion.section
      initial={{ y: 5, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      id="contact"
      className="contact-me-section"
    >
      <p className="contact-me-header">Contact Me</p>
      <p className="contact-me-description">
        Are you looking for a passionate
        <span className="text-primary"> Fullstack Developer </span>
        to join your team? I would love to be part of your organization and
        contribute my skills and expertise to help achieve your goals. Please
        use the contact form below to get in touch.
      </p>
      <a href="mailto:szymon.radomski@yahoo.com">
        <button className="my-button">Gmail</button>
      </a>
    </motion.section>
  )
}
