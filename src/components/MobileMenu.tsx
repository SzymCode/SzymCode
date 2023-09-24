import {useState, RefObject, useRef} from "react"
import { motion } from "framer-motion"
import { MdOutlineClose } from "react-icons/md"
import Link from "next/link"
import { TbBrandGithub } from "react-icons/tb"
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi"

import { HandleScroll } from "@/utils"


export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef<string | any>("")

  return (
    <>
      <div onClick={() => { setShowMenu(true) }} className="mobile-menu-container group">
        <span className="mobile-menu-icon mobile-menu-icon-line-1"/>
        <span className="mobile-menu-icon mobile-menu-icon-line-2"/>
        <span className="mobile-menu-icon mobile-menu-icon-line-3"/>
      </div>
      {showMenu && (
        <div ref={(node) => (ref.current = node)} className="mobile-menu">
          <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="mobile-menu-inner scrollbarHide">
            <MdOutlineClose onClick={() => { setShowMenu(false) }} className="mobile-menu-close"/>
            <ul className="mobile-menu-ul">
              <Link href="#home" className="nav-link" onClick={ HandleScroll }>
                <motion.li
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}>
                  Home
                </motion.li>
              </Link>
              <Link href="#about" className="nav-link" onClick={ HandleScroll }>
                <motion.li
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}>
                  About Me
                </motion.li>
              </Link>
              <Link href="#projects" className="nav-link" onClick={ HandleScroll }>
                <motion.li
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}>
                  Projects
                </motion.li>
              </Link>
              <Link href="#contact" className="nav-link" onClick={ HandleScroll }>
                <motion.li
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.6, ease: "easeOut" }}>
                  Contact
                </motion.li>
              </Link>
            </ul>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.9, ease: "easeOut" }}
                className="absolute right-12 bottom-12 text-center">
              <a href="https://github.com/SzymCode" target="_blank">
                <span className="mobile-menu-icon hover:text-black">
                  <TbBrandGithub/>
                </span>
              </a>

              <a href="https://www.linkedin.com/in/szymon-radomski" target="_blank">
                <span className="mobile-menu-icon hover:text-primary-linkedin dark:hover:text-primary-linkedin">
                  <BiLogoLinkedin/>
                </span>
              </a>

              <a href="mailto:s.radomski19@gmail.com" target="_blank">
                <span className="mobile-menu-icon hover:text-primary-gmail dark:hover:text-primary-gmail">
                  <BiLogoGmail/>
                </span>
              </a>
              <motion.a
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1.2, ease: "easeOut" }}
                  className="mobile-menu-email"
                  href="mailto:s.radomski19@gmail.com"
              >
                <p>s.radomski19@gmail.com</p>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  )
}