import { TbBrandGithub } from "react-icons/tb"
import {BiLogoGmail, BiLogoLinkedin} from "react-icons/bi"

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://github.com/SzymCode" target="_blank">
        <span className="footer-icon hover:text-black dark:text-primary-lightgray">
          <TbBrandGithub/>
        </span>
      </a>

      <a href="https://www.linkedin.com/in/szymon-radomski" target="_blank">
        <span className="footer-icon hover:text-primary-linkedin dark:hover:text-primary-linkedin">
          <BiLogoLinkedin/>
        </span>
      </a>
      <a href="mailto:s.radomski19@gmail.com" target="_blank">
        <span className="footer-icon hover:text-primary-gmail dark:hover:text-primary-gmail">
          <BiLogoGmail/>
        </span>
      </a>
    </div>
  )
}
