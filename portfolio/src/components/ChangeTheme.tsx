import { BiMoon, BiSun } from "react-icons/bi"


interface ChangeThemeProps {
  darkMode: boolean
  toggleChangeTheme: () => void
}

export default function ChangeTheme({ darkMode, toggleChangeTheme }: ChangeThemeProps): JSX.Element {
  return (
    <button className="change-theme-buttons" onClick={toggleChangeTheme}>
      {darkMode ? (
        <BiSun className="change-theme-icon" />
      ) : (
        <BiMoon className="change-theme-icon" />
      )}
    </button>
  )
}
