import { motion } from "framer-motion"
export default function Banner() {
  return (
    <section id="home" className="max-w-containerSmall mx-auto py-10 md:py-24 flex flex-col gap-4 lgl:gap-8 ">
      <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg tracking-wide text-primary-black font-semibold">
        Hi, my name is
      </motion.h3>
      <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-semibold flex flex-col text-primary -mt-3">
        Szymon Radomski.
        <span className="text-primary-black mt-2 lgl:mt-4">
          Im self-taught fullstack developer.
        </span>
      </motion.h1>
      <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base md:max-w-[650px] font-medium">
        As a self-taught developer, Im actively seeking challenging career opportunities. I have a no-commerce mastery of JavaScript (TypeScript),
        Python and mostly use React, Django frameworks. Intermediate in creating a visually attractive and user-friendly frontend using HTML5, CSS3/Tailwind and MUI. <br/>
        <span className="mt-2 inline-flex relative text-primary cursor-pointer h-7 overflow-x-hidden group">
          Learn More
          <span className="absolute w-full h-[1px] bg-primary left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"/>
        </span>
      </motion.p>
      <a href="https://github.com/SzymCode/ContactBook" target="_blank">
        <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
            className="w-52 h-14 text-sm border border-primary rounded-md text-primary tracking-wide hover:bg-primary-lightblue duration-300">
          Check out my Project!
        </motion.button>
      </a>
    </section>
  )
}
