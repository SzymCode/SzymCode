import { TbBrandGithub } from "react-icons/tb"
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi"


export default function LeftSide() {
  return (
    <div className="left-side-container">
      <div className="left-side-icons">

        <a href="https://github.com/SzymCode" className="left-side-icon github-icon">
           <TbBrandGithub />
        </a>

        <a href="https://www.linkedin.com/in/szymon-radomski" className="left-side-icon linkedin-icon">
          <BiLogoLinkedin />
        </a>

        <a href="mailto:szymon.radomski@yahoo.com" className="left-side-icon gmail-icon">
          <BiLogoGmail />
        </a>

      </div>
      <div className="left-side-line"/>
    </div>
  )
}
