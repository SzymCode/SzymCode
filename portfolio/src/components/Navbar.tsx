import Link from "next/link"
import { motion } from "framer-motion"


export default function Navbar() {
  return (
    <div className="nav">
      <div className="container flex items-center justify-between h-16 md:h-24">
        <img src="https://avatars.githubusercontent.com/u/107359025?s=400&u=016ac865331a7408789cec3dda8e2c5a4ad151f3&v=4" alt="" className="w-16 md:w-24 h-16 md:h-24 -ml-6 md:-ml-12"/>
        <div className="-mr-8">
          <ul className="flex text-[16px] gap-7 invisible md:visible">
            <Link href="#home" className="navlink">
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}>
                Home
              </motion.li>
            </Link>
            <Link href="#about" className="navlink">
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}>
                About Me
              </motion.li>
            </Link>
            <Link href="#projects" className="navlink">
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}>
                Projects
              </motion.li>
            </Link>
            <Link href="#contact" className="navlink">
              <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 }}>
                Contact
              </motion.li>
            </Link>
          </ul>
        </div>

        <div className="w-5 h-5 -mr-3 flex flex-col justify-between items-center md:hidden text-4xl duration-300 cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-primary-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"/>
          <span className="w-full h-[2px] bg-primary-black inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"/>
          <span className="w-full h-[2px] bg-primary-black inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"/>
        </div>
      </div>
    </div>
  )
}
