import { ReactElement, useState, useRef } from 'react'
import { BiMenu, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { TbBrandGithub } from 'react-icons/tb'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { MobileMenuRefType, ShowMenuType } from '@/types'
import { HandleScroll } from '@/utils'

export default function MobileMenu(): ReactElement {
  const [showMenu, setShowMenu] = useState<ShowMenuType>(false)
  const ref = useRef<MobileMenuRefType>()

  return (
    <>
      <motion.div
        className="mobile-menu-container"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 1 }}
      >
        <BiMenu
          className="text-3xl"
          onClick={() => {
            setShowMenu(true)
          }}
        />
      </motion.div>
      {showMenu && (
        <div ref={(node) => (ref.current = node)} className="mobile-menu">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="mobile-menu-inner scrollbarHide"
          >
            <MdOutlineClose
              onClick={() => {
                setShowMenu(false)
              }}
              className="mobile-menu-close"
            />
            <ul className="mobile-menu-ul">
              <Link href="#home" className="nav-link" onClick={HandleScroll}>
                <motion.li
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="mobile-menu-li"
                  onClick={() => {
                    setShowMenu(false)
                  }}
                >
                  Home
                </motion.li>
              </Link>
              <Link href="#about" className="nav-link" onClick={HandleScroll}>
                <motion.li
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="mobile-menu-li"
                  onClick={() => {
                    setShowMenu(false)
                  }}
                >
                  About Me
                </motion.li>
              </Link>
              <Link
                href="#projects"
                className="nav-link"
                onClick={HandleScroll}
              >
                <motion.li
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="mobile-menu-li"
                  onClick={() => {
                    setShowMenu(false)
                  }}
                >
                  Projects
                </motion.li>
              </Link>
              <Link href="#contact" className="nav-link" onClick={HandleScroll}>
                <motion.li
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="mobile-menu-li"
                  onClick={() => {
                    setShowMenu(false)
                  }}
                >
                  Contact
                </motion.li>
              </Link>
            </ul>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.9 }}
              className="mobile-menu-icons"
            >
              <a
                href="https://github.com/SzymCode"
                className="mobile-menu-icon github-icon"
              >
                <TbBrandGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/szymon-radomski"
                className="mobile-menu-icon linkedin-icon"
              >
                <BiLogoLinkedin />
              </a>

              <a
                href="mailto:szymon.radomski@yahoo.com"
                className="mobile-menu-icon gmail-icon"
              >
                <BiLogoGmail />
              </a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  )
}
