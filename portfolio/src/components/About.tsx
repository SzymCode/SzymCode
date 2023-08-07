import { motion } from "framer-motion"

import { SectionTitle } from "@/components"

export default function About() {
  return (
    <section id="about" className="max-w-containerSmall mx-auto pt-10 pb-20 flex flex-col gap-8 text-primary">
      <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.2 }}>
        <SectionTitle title="About Me" />
      </motion.div>
      <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.4 }}
          className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full text-base text-primary-black font-medium flex inline-flex flex-col gap-4">
          Greetings! I am Szymon Radomski, a passionate web developer with a deep curiosity for technology and its possibilities.
          Always seeking opportunities to expand my knowledge and stay up-to-date with the latest trends and best practices.
          I am open to new challenges and enjoy stepping out of my comfort zone to explore new technologies and frameworks.
          Throughout my journey as a developer, I have embarked on several projects that reflect my passion for technology.
          If you are looking for a passionate software developer who is committed to delivering high-quality solutions,
          I would be delighted to collaborate on projects and contribute to your team. Feel free to reach out to me via the
          contact information provided on my GitHub profile.
        </div>
      </motion.div>
      <div className="block text-center mx-auto mt-5 md:text-2xl text-lg">
        Tech Stack:
        <div className="flex py-4 gap-5 color:grey mt-5">
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://cdn.worldvectorlogo.com/logos/django.svg"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://cdn-images.himalayas.app/9w3a704t88nxt617os94xdamvz15"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://mui.com/static/logo.png"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
               className="w-5 h-6 md:w-6 md:h-8 lgl:w-8 lgl:h-10 xl:w-10 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
          <img alt="" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
               className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 xl:w-12 xl:h-12 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"/>
        </div>
      </div>

    </section>
  )
}
