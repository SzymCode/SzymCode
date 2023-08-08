import { useEffect } from "react"
import { BiMoon, BiSun } from "react-icons/bi"

import { HandleChangeTheme } from "@/utils"

interface ChangeThemeProps {
  darkMode: boolean
  toggleChangeTheme: () => void
}

export default function ChangeTheme({ darkMode, toggleChangeTheme }: ChangeThemeProps): JSX.Element {
  useEffect(() => {
    localStorage.theme = 'light'
  }, [darkMode])
  return (
    <button className="invisible text-primary-black dark:text-primary-lightgray mt-0.5 md:mt-0 -ml-48 md:ml-0" onClick={toggleChangeTheme}>
      {darkMode ? (
        <div className="visible flex">
          <BiSun className="text-2xl mr-2"/>
        </div>
      ) : (
        <div className="visible flex">
          <BiMoon className="text-2xl mr-2"/>
        </div>
      )}
    </button>
  )
}