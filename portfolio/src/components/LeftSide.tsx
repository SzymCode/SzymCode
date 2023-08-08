import { TbBrandGithub } from "react-icons/tb"
import { BiLogoGmail, BiLogoFacebook, BiLogoLinkedin, BiLogoDiscordAlt } from "react-icons/bi"


export default function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4">
      <div className="flex flex-col gap-4 items-center">
        <a href="https://github.com/SzymCode" target="_blank">
          <span className="w-14 h-14 text-4xl rounded-full inline-flex items-center justify-center cursor-pointer
              bg-primary-white hover:outline hover:outline-[1px] text-primary-gray dark:text-primary-black hover:text-black hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub/>
          </span>
        </a>

        <a href="https://www.linkedin.com/in/szymon-radomski" target="_blank">
          <span className="w-14 h-14 text-4xl rounded-full inline-flex items-center justify-center cursor-pointer
              bg-primary-white hover:outline hover:outline-[1px] text-primary-gray dark:text-primary-black hover:text-primary-linkedin dark:hover:text-primary-linkedin hover:-translate-y-2 transition-all duration-300">
            <BiLogoLinkedin/>
          </span>
        </a>

        <a href="https://www.facebook.com/s.radomski16" target="_blank">
          <span className="w-14 h-14 text-4xl rounded-full inline-flex items-center justify-center cursor-pointer
              bg-primary-white hover:outline hover:outline-[1px] text-primary-gray dark:text-primary-black hover:text-primary-facebook dark:hover:text-primary-facebook hover:-translate-y-2 transition-all duration-300">
            <BiLogoFacebook/>
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 -mt-1 bg-primary-gray"/>
    </div>
  )
}
