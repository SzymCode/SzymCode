import { TbBrandGithub } from "react-icons/tb"
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi"


export default function LeftSide() {
  return (
    <div className="left-side-container">
      <div className="left-side-icons">
        <a href="https://github.com/SzymCode" target="_blank">
          <span className="left-side-icon hover:text-black">
            <TbBrandGithub/>
          </span>
        </a>

        <a href="https://www.linkedin.com/in/szymon-radomski" target="_blank">
          <span className="left-side-icon hover:text-primary-linkedin dark:hover:text-primary-linkedin">
            <BiLogoLinkedin/>
          </span>
        </a>

        <a href="mailto:s.radomski19@gmail.com" target="_blank">
          <span className="left-side-icon hover:text-primary-gmail dark:hover:text-primary-gmail">
            <BiLogoGmail/>
          </span>
        </a>
      </div>
      <div className="left-side-line"/>
    </div>
  )
}
