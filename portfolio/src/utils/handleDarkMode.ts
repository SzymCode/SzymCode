import { useState, useEffect } from 'react'

interface HandleDarkModeHook {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function HandleDarkMode(): HandleDarkModeHook {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
        return true
      }
    }
    return false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  function toggleDarkMode() {
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

  return { darkMode, toggleDarkMode }
}
