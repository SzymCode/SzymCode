import { useState, useEffect } from 'react'

import { ChangeThemeInterface, DarkModeType } from '@/types'

export default function HandleChangeTheme(): ChangeThemeInterface {
  const [darkMode, setDarkMode] = useState<DarkModeType>((): DarkModeType => {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
        return true
      }
    }
    return false
  })

  useEffect(() => {
    setDarkMode(false)
  }, [])

  function toggleChangeTheme() {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode
      if (typeof localStorage !== 'undefined') {
        if (newDarkMode) {
          document.documentElement.classList.add('dark')
          localStorage.theme = 'dark'
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.theme = 'light'
        }
      }
      return newDarkMode
    })
  }

  return { darkMode, toggleChangeTheme }
}
