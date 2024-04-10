import { ReactElement } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import {
  AboutMe,
  Archive,
  Banner,
  ContactMe,
  Footer,
  LeftSide,
  Navbar,
  RightSide
} from '@/components'
import { HandleChangeTheme } from '@/utils'

export default function Home(): ReactElement {
  const { darkMode, toggleChangeTheme } = HandleChangeTheme()

  return (
    <div>
      <Head>
        <title>SzymCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        {/* made with https://redketchup.io/favicon-generator :) */}
      </Head>
      <main className="index-main">
        <Navbar darkMode={darkMode} toggleChangeTheme={toggleChangeTheme} />
        <div className="index-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="index-side left-0"
          >
            <LeftSide />
          </motion.div>
          <div className="index-content">
            <Banner />
            <AboutMe />
            <Archive />
            <ContactMe />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="index-side right-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </div>
  )
}
