import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { ImageURLType, NavbarInterface } from '@/types'
import { ChangeTheme, MobileMenu } from '@/components'
import { HandleScroll } from '@/utils'

export default function Navbar({
  darkMode,
  toggleChangeTheme
}: NavbarInterface): ReactElement {
  const imageUrl: ImageURLType = darkMode
    ? 'https://en.gravatar.com/userimage/238510040/9ae62fa2d77e0c151046465752929d88.jpeg?size=256'
    : 'https://en.gravatar.com/userimage/238510040/faf1c514d46714163a51e876ee5eafc1.jpeg?size=256'

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img src={imageUrl} alt="" className="navbar-logo" />
        <div className="-mr-8">
          <ul className="navbar-items">
            <Link href="#home" className="navbar-link" onClick={HandleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.li>
            </Link>
            <Link href="#about" className="navbar-link" onClick={HandleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                About Me
              </motion.li>
            </Link>
            <Link
              href="#projects"
              className="navbar-link"
              onClick={HandleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="navbar-link"
              onClick={HandleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.6 }}
              >
                Contact
              </motion.li>
            </Link>
            <ChangeTheme
              darkMode={darkMode}
              toggleChangeTheme={toggleChangeTheme}
            />
          </ul>
        </div>
        <MobileMenu />
      </div>
    </div>
  )
}
