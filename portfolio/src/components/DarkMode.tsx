import { useEffect } from "react"
import { BiMoon, BiSun } from "react-icons/bi"

import { HandleDarkMode } from "@/utils"

interface DarkModeProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function DarkMode({ darkMode, toggleDarkMode }: DarkModeProps): JSX.Element {
  useEffect(() => {
    localStorage.theme = 'light'
  }, [darkMode])
  return (
    <button className="invisible text-primary-black dark:text-primary-lightgray mt-1 md:mt-0 -ml-20 md:ml-24" onClick={toggleDarkMode}>
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