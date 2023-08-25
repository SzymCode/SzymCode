import { useState, useEffect } from 'react'

interface HandleChangeThemeHook {
  darkMode: boolean
  toggleChangeTheme: () => void
}

export default function HandleChangeTheme(): HandleChangeThemeHook {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
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
