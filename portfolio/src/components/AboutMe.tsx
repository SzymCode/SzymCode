import { motion } from "framer-motion"

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
  const favouritesList: Tech[] = [
    {
      alt: "laravel",
      src: "https://cdn.simpleicons.org/laravel/FF2D20",
      link: "https://laravel.com"
    },
    {
      alt: "vue",
      src: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
      link: "https://vuejs.org"
    },
    {
      alt: "nest",
      src: "https://cdn.simpleicons.org/nestjs/E0234E",
      link: "https://nestjs.com"
    },
    {
      alt: "react",
      src: "https://cdn.simpleicons.org/react/61DAFB",
      link: "https://react.dev"
    },
    {
      alt: "tailwind",
      src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      link: "https://tailwindcss.com"
    },
    {
      alt: "sass",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      link: "https://sass-lang.com"
    },
    {
      alt: "pest",
      src: "https://plugins.jetbrains.com/files/14636/423525/icon/pluginIcon.png",
      link: "https://pestphp.com"
    },
    {
      alt: "cypress",
      src: "https://static-00.iconduck.com/assets.00/cypress-icon-512x511-29zvfts6.png",
      link: "https://www.cypress.io"
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
        <div>
          Favourite technologies
          <div className="technologies-list">
            {favouritesList.map((tech, index) => (
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
        </div>
      </motion.div>
    </section>
  )
}





