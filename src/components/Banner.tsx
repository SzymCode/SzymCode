import { motion } from "framer-motion"

export default function Banner() {
  return (
    <section id="home" className="banner-section">
      <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="banner-h3">
        Hi, my name is
      </motion.h3>
      <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="banner-h1">
        Szymon Radomski.
        <span className="banner-span">
          Im self-taught fullstack developer.
        </span>
      </motion.h1>
      <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="banner-description">
        As a self-taught developer, Im actively seeking challenging career opportunities. I have a no-commerce mastery of JavaScript (TypeScript),
        Python and mostly use React, Django frameworks. Intermediate in creating a visually attractive and user-friendly frontend using HTML5, CSS3/Tailwind and MUI. <br/>
        <a href="https://github.com/SzymCode/ContactBook" target="_blank">
         <span className="banner-project group">
           Check out my main project!
           <span className="banner-project-hover"/>
         </span>
        </a>
      </motion.p>
    </section>
  )
}
