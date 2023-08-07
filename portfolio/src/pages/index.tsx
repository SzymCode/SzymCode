import Head from "next/head"
import { motion } from "framer-motion"

import { About, Archive, Banner, LeftSide, Navbar, RightSide } from "@/components"


export default function Home() {
  return (
    <div>
      <Head>
        <title>SzymCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" /> {/* made with https://redketchup.io/favicon-generator :) */}
      </Head>
      <main className="w-full h-screen bg-primary-white text-primary-black overflow-x-hidden overflow-y-scroll">
        <Navbar/>
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide/>
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4 xl:p-0 pt-14 xl:pt-32">
            <Banner />
            <About />
            <Archive />
          </div>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide/>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
