import Head from "next/head"
import { motion } from "framer-motion"


import { About, Archive, Banner, Contact, Footer, LeftSide, Navbar, RightSide } from "@/components"
import { HandleChangeTheme } from "@/utils"

export default function Home() {
  const { darkMode, toggleChangeTheme } = HandleChangeTheme()

  return (
    <div>
      <Head>
        <title>SzymCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" /> {/* made with https://redketchup.io/favicon-generator :) */}
      </Head>
      <main className="w-full h-screen bg-primary-white dark:bg-primary-darkest text-primary-black
          overflow-x-hidden overflow-y-auto scrollbar scrollbar-track-primary-dark/20 scrollbar-thumb-primary-dark/40">
        <Navbar darkMode={darkMode} toggleChangeTheme={toggleChangeTheme} />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden xl:inline-flex w-28 h-full fixed left-0 bottom-0">
            <LeftSide/>
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4 xl:p-0 pt-14 xl:pt-32">
            <Banner />
            <About darkMode={darkMode}/>
            <Archive />
            <Contact />
            <Footer />
          </div>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden xl:inline-flex w-28 h-full fixed right-0 bottom-0">
            <RightSide/>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
