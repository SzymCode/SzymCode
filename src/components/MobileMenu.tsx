import {useState, RefObject, useRef} from "react"
import { motion } from "framer-motion"
import { MdOutlineClose } from "react-icons/md"
import Link from "next/link"
import { TbBrandGithub } from "react-icons/tb"
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi"

import { HandleScroll } from "@/utils"


export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef<string | any>("")

  return (
    <>
      <div onClick={() => { setShowMenu(true) }} className="w-5 h-5 -mr-3 flex flex-col justify-between items-center md:hidden text-4xl duration-300 cursor-pointer overflow-hidden group">
        <span className="w-full h-[2px] bg-primary-black dark:bg-primary-lightgray inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"/>
        <span className="w-full h-[2px] bg-primary-black dark:bg-primary-lightgray inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"/>
        <span className="w-full h-[2px] bg-primary-black dark:bg-primary-lightgray inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"/>
      </div>
      {showMenu && (
        <div ref={(node) => (ref.current = node)} className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end overflow-hidden">
          <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-primary-white dark:bg-primary-darker flex flex-col items-center px-4 py-10 relative overflow-hidden">
            <MdOutlineClose onClick={() => { setShowMenu(false) }} className="text-3xl text-primary-black dark:text-primary-lightgray cursor-pointer hover:text-primary dark:hover:text-primary absolute top-4 right-4 duration-300"/>
            <ul className="flex flex-col text-base gap-7">
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
                <span className="w-10 h-10 text-2xl rounded-full inline-flex items-center justify-center cursor-pointer
                    bg-primary-white dark:bg-primary-dark outline outline-[1px] text-primary-gray dark:text-primary-lightgray hover:text-black hover:-translate-y-2 transition-all duration-300">
                  <TbBrandGithub/>
                </span>
              </a>

              <a href="https://www.linkedin.com/in/szymon-radomski" target="_blank">
                <span className="w-10 h-10 text-2xl rounded-full inline-flex items-center justify-center cursor-pointer ml-4
                    bg-primary-white dark:bg-primary-dark outline outline-[1px] text-primary-gray dark:text-primary-lightgray hover:text-primary-linkedin dark:hover:text-primary-linkedin hover:-translate-y-2 transition-all duration-300">
                  <BiLogoLinkedin/>
                </span>
              </a>

              <a href="https://www.facebook.com/s.radomski16" target="_blank">
                <span className="w-10 h-10 text-2xl rounded-full inline-flex items-center justify-center cursor-pointer ml-4
                    bg-primary-white dark:bg-primary-dark outline outline-[1px] text-primary-gray dark:text-primary-lightgray hover:text-primary-facebook dark:hover:text-primary-facebook hover:-translate-y-2 transition-all duration-300">
                  <BiLogoFacebook/>
                </span>
              </a>
              <motion.a
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1.2, ease: "easeOut" }}
                  className="text-sm w-72 tracking-widest text-primary text-center relative top-4"
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