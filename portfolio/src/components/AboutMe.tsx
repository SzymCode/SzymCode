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

export default function AboutMe({ darkMode }: AboutProps) {
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
      alt: "php",
      src: `https://skillicons.dev/icons?i=php`,
      link: "https://www.python.org/"
    },
    {
      alt: "python",
      src: `https://skillicons.dev/icons?i=py&theme=${theme}`,
      link: "https://www.python.org/"
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
    <section id="about" className="about-me-section">
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
          className="about-me-description-container">
        <div className="about-me-description">
          Greetings! I am Szymon Radomski, a <span className="text-primary"> passionate web developer </span> with a deep curiosity for
          technology and its possibilities. Always seeking opportunities to expand my knowledge and stay up-to-date with the latest trends
          and best practices. If you are looking for a passionate developer who is committed to delivering high-quality solutions, I would
          be delighted to collaborate on projects and contribute to your team.
        </div>
      </motion.div>
      <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="technologies-container">
        Technologies:
        <div className="technologies-list">
          {techStack.map((tech, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.125 }}
              key={tech.alt}
              href={tech.link}
              className="group technology-link"
            >
              <img alt={tech.alt} src={tech.src} width={0} height={0} className="technology-icon"/>
              <span className="technology-name">
                {tech.alt}
              </span>

            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}





