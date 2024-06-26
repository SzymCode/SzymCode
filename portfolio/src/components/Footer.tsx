import { ReactElement } from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'

export default function Footer(): ReactElement {
  return (
    <div className="footer-container">
      <a href="https://github.com/SzymCode" className="footer-icon github-icon">
        <TbBrandGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/szymon-radomski"
        className="footer-icon linkedin-icon"
      >
        <BiLogoLinkedin />
      </a>

      <a
        href="mailto:szymon.radomski@yahoo.com"
        target="_blank"
        className="footer-icon gmail-icon"
      >
        <BiLogoGmail />
      </a>
    </div>
  )
}
