import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"

import { ChangeTheme } from "@/components"
import { HandleScroll } from "@/utils"

interface NavbarProps {
  darkMode: boolean
  toggleChangeTheme: () => void
}

export default function Navbar({ darkMode, toggleChangeTheme }: NavbarProps) {
  const imageUrl = darkMode
      ? 'https://en.gravatar.com/userimage/238510040/9ae62fa2d77e0c151046465752929d88.jpeg?size=256'
      : 'https://en.gravatar.com/userimage/238510040/faf1c514d46714163a51e876ee5eafc1.jpeg?size=256'

  const ref = useRef<string | any>("")

  return (
    <div className="nav">
      <div className="container flex items-center justify-between h-16 md:h-24">
        <img src={imageUrl} alt="" className="w-16 md:w-24 h-16 md:h-24 -ml-6 md:-ml-12"/>
        <div className="-mr-8">
          <ul className="flex text-[16px] gap-7 invisible md:visible">
            <Link href="#home" className="nav-link" onClick={ HandleScroll }>
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}>
                Home
              </motion.li>
            </Link>
            <Link href="#about" className="nav-link" onClick={ HandleScroll }>
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}>
                About Me
              </motion.li>
            </Link>
            <Link href="#projects" className="nav-link" onClick={ HandleScroll }>
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}>
                Projects
              </motion.li>
            </Link>
            <Link href="#contact" className="nav-link" onClick={ HandleScroll }>
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 }}>
                Contact
              </motion.li>
            </Link>
            <ChangeTheme darkMode={darkMode} toggleChangeTheme={toggleChangeTheme} />
          </ul>
        </div>

        <div className="w-5 h-5 -mr-3 flex flex-col justify-between items-center md:hidden text-4xl duration-300 cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-primary-black dark:bg-primary-lightgray inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"/>
          <span className="w-full h-[2px] bg-primary-black dark:bg-primary-lightgray inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"/>
          <span className="w-full h-[2px] bg-primary-black dark:bg-primary-lightgray inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"/>
        </div>
      </div>
    </div>
  )
}
