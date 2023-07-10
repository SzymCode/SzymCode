import Link from "next/link"


export default function Navbar() {
  return (
    <div className="nav">
      <div className="container flex items-center justify-between h-16 md:h-24">
        <img src="https://avatars.githubusercontent.com/u/107359025?s=400&u=016ac865331a7408789cec3dda8e2c5a4ad151f3&v=4" alt="" className="w-16 md:w-24 h-16 md:h-24 -ml-10"/>
        <div>
          <ul className="flex text-[16px] gap-7">
            <Link href="#home" className="navlink">
              <li>
                Home
              </li>
            </Link>
            <Link href="#about" className="navlink">
              <li>
                About Me
              </li>
            </Link>
            <Link href="#projects" className="navlink">
              <li>
                Projects
              </li>
            </Link>
            <Link href="#home" className="navlink">
              <li>
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
