import { motion } from "framer-motion"
export default function Banner() {
  return (
    <section id="home" className="max-w-containerSmall mx-auto py-10 md:py-32 flex flex-col gap-4 lgl:gap-8">
      <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg tracking-wide text-black dark:text-primary-white font-semibold">
        Hi, my name is
      </motion.h3>
      <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-semibold flex flex-col text-primary -mt-3 text-primary dark:text-primary">
        Szymon Radomski.
        <span className="text-primary-black mt-2 lgl:mt-4 text-black dark:text-primary-lightgray">
          Im self-taught fullstack developer.
        </span>
      </motion.h1>
      <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base md:max-w-[650px] font-medium text-black dark:text-primary-lightgray">
        As a self-taught developer, Im actively seeking challenging career opportunities. I have a no-commerce mastery of JavaScript (TypeScript),
        Python and mostly use React, Django frameworks. Intermediate in creating a visually attractive and user-friendly frontend using HTML5, CSS3/Tailwind and MUI. <br/>
        <a href="https://github.com/SzymCode/ContactBook" target="_blank">
         <span className="mt-4 text-xl inline-flex relative text-primary cursor-pointer h-7 overflow-x-hidden group">
           Check out my main project!
           <span className="absolute w-full h-[1px] bg-primary left-0 bottom-0.5 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"/>
         </span>
        </a>
      </motion.p>
    </section>
  )
}
