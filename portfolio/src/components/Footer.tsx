import { motion } from "framer-motion"
import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin, SlSocialFacebook, } from "react-icons/sl";
import {BiLogoFacebook, BiLogoLinkedin} from "react-icons/bi";

export default function Footer() {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-12 gap-4">
      <a href="https://github.com/SzymCode" target="_blank">
          <span className="w-14 h-14 text-4xl rounded-full inline-flex items-center justify-center cursor-pointer
              bg-primary-white dark:bg-primary-dark outline outline-[1px] text-primary-gray dark:text-primary-lightgray hover:text-black hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub/>
          </span>
        </a>

        <a href="https://www.linkedin.com/in/szymon-radomski" target="_blank">
          <span className="w-14 h-14 text-4xl rounded-full inline-flex items-center justify-center cursor-pointer
              bg-primary-white dark:bg-primary-dark outline outline-[1px] text-primary-gray dark:text-primary-lightgray hover:text-primary-linkedin dark:hover:text-primary-linkedin hover:-translate-y-2 transition-all duration-300">
            <BiLogoLinkedin/>
          </span>
        </a>

        <a href="https://www.facebook.com/s.radomski16" target="_blank">
          <span className="w-14 h-14 text-4xl rounded-full inline-flex items-center justify-center cursor-pointer
              bg-primary-white dark:bg-primary-dark outline outline-[1px] text-primary-gray dark:text-primary-lightgray hover:text-primary-facebook dark:hover:text-primary-facebook hover:-translate-y-2 transition-all duration-300">
            <BiLogoFacebook/>
          </span>
        </a>
    </div>
  )
}
