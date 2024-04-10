import { ReactElement } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { motion } from 'framer-motion'

import { ChangeThemeInterface } from '@/types'

export default function ChangeTheme({
  darkMode,
  toggleChangeTheme
}: ChangeThemeInterface): ReactElement {
  return (
    <motion.button
      className="change-theme-buttons"
      onClick={toggleChangeTheme}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.8 }}
    >
      {darkMode ? (
        <BiSun className="change-theme-icon" />
      ) : (
        <BiMoon className="change-theme-icon" />
      )}
    </motion.button>
  )
}
