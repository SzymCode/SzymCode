import { motion } from "framer-motion"
import Image from "next/image"

import { SectionTitle } from "@/components"

interface Tech {
  alt: string
  src: string
  link?: string
}

interface AboutProps {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  const theme = darkMode ?  'dark' : 'light'
  const techStack: Tech[] = [
    {
      alt: "javascript",
      src: `https://skillicons.dev/icons?i=js&theme=${theme}`,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=pl"
    },
    {
      alt: "typescript",
      src: `https://skillicons.dev/icons?i=ts&theme=${theme}`,
      link: "https://www.typescriptlang.org/"
    },
    {
      alt: "python",
      src: `https://skillicons.dev/icons?i=py&theme=${theme}`,
      link: "https://www.python.org/"
    },
    {
      alt: "react",
      src: `https://skillicons.dev/icons?i=react&theme=${theme}`,
      link: "https://www.python.org/"
    },
    {
      alt: "redux",
      src: `https://skillicons.dev/icons?i=redux&theme=${theme}`,
      link: "https://redux.js.org/"
    },
    {
      alt: "django",
      src: `https://skillicons.dev/icons?i=django&theme=${theme}`,
      link: "https://www.djangoproject.com/"
    },
    {
      alt: "html",
      src: `https://skillicons.dev/icons?i=html&theme=${theme}`,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
    },
    {
      alt: "css",
      src: `https://skillicons.dev/icons?i=css&theme=${theme}`,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/CSS3"
    },
    {
      alt: "tailwind",
      src: `https://skillicons.dev/icons?i=tailwind&theme=${theme}`,
      link: "https://tailwindcss.com/"
    },
    {
      alt: "bootstrap",
      src: `https://skillicons.dev/icons?i=bootstrap&theme=${theme}`,
      link: "https://getbootstrap.com/"
    },
    {
      alt: "mui",
      src: `https://skillicons.dev/icons?i=mui&theme=${theme}`,
      link: "https://mui.com/material-ui/material-icons/"
    },
    {
      alt: "nodejs",
      src: `https://skillicons.dev/icons?i=nodejs&theme=${theme}`,
      link: "https://nodejs.org/en"
    },
    {
      alt: "npm",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      link: "https://www.npmjs.com/"
    },
    {
      alt: "nextjs",
      src: `https://skillicons.dev/icons?i=nextjs&theme=${theme}`,
      link: "https://nextjs.org/"
    },
    {
      alt: "git",
      src: `https://skillicons.dev/icons?i=git&theme=${theme}`,
      link: "https://git-scm.com/"
    },
    {
      alt: "docker",
      src: `https://skillicons.dev/icons?i=docker&theme=${theme}`,
      link: "https://www.docker.com/"
    },
    {
      alt: "nginx",
      src: `https://skillicons.dev/icons?i=nginx&theme=${theme}`,
      link: "https://www.nginx.com/"
    },
    {
      alt: "webpack",
      src: `https://skillicons.dev/icons?i=webpack&theme=${theme}`,
      link: "https://webpack.js.org/"
    }
  ]

  return (
    <section id="about" className="max-w-containerSmall mx-auto py-10 md:py-32 flex flex-col gap-8 text-primary">
      <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.8 }}>
        <SectionTitle title="About Me" />
      </motion.div>
      <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 1 }}
          className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full text-base text-primary-black dark:text-primary-lightgray font-medium flex inline-flex flex-col gap-4">
          Greetings! I am Szymon Radomski, a passionate web developer with a deep curiosity for technology and its possibilities.
          Always seeking opportunities to expand my knowledge and stay up-to-date with the latest trends and best practices.
          If you are looking for a passionate software developer who is committed to delivering high-quality solutions,
          I would be delighted to collaborate on projects and contribute to your team. Feel free to reach out to me via the
          contact information provided on my GitHub profile.
        </div>
      </motion.div>
      <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="block text-center mx-auto mt-14 text-xl md:text-2xl">
        Technologies:
        <div className="grid grid-cols-9 py-4 gap-2 md:gap-3 color:grey mt-0 md:mt-5 mx-auto">
          {techStack.map((tech, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.125 }}
              key={tech.alt}
              href={tech.link}
              className="group w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
            >
              <img
                alt={tech.alt}
                src={tech.src}
                width={0}
                height={0}
                className="markdown-icon w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 group-hover:-translate-y-1.5 transition-all duration-300 ease-in-out z-0 mb-2"/>
              <span className="p-1 md:p-2 relative -top-10 md:-top-12 left-2 md:left-6 rounded-md shadow-md text-primary-white dark:text-primary-lightgray bg-primary-dark text-[10px] md:text-xs font-bold invisible opacity-0 group-hover:opacity-100 group-hover:visible z-40 transition-all duration-300">
                {tech.alt}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}





