import { motion } from "framer-motion"
import Image from "next/image"

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
      <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="block text-center items-center mx-auto mt-14 md:text-2xl text-lg">
        Technologies:
        <div className="grid grid-cols-9 py-4 gap-5 color:grey mt-5">
          {techStack.map((tech, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.125 }}
              key={tech.alt}
              href={tech.link}
              className="group w-12 -mb-8"
            >
              <Image
                alt={tech.alt}
                src={tech.src}
                width={0}
                height={0}
                className="w-6 h-6 md:w-8 md:h-8 lgl:w-10 lgl:h-10 group-hover:-translate-y-1.5 transition-all duration-300 ease-in-out z-0 mb-2"/>
              <span className="p-2 relative bottom-16 left-4 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold invisible opacity-0 group-hover:opacity-100 group-hover:visible z-40 transition-all duration-300">
                {tech.alt}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


interface Tech {
  alt: string
  src: string
  link?: string
}

const techStack: Tech[] = [
  {
    alt: "javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=pl"
  },
  {
    alt: "typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/"
  },
  {
    alt: "python",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    link: ""
  },
  {
    alt: "react",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    link: "https://www.python.org/"
  },
  {
    alt: "redux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    link: "https://redux.js.org/"
  },
  {
    alt: "django",
    src: "https://cdn.worldvectorlogo.com/logos/django.svg",
    link: "https://www.djangoproject.com/"
  },
  {
    alt: "html5",
    src: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
  },
  {
    alt: "css3",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/CSS3"
  },
  {
    alt: "tailwind",
    src: "https://raw.githubusercontent.com/aniftyco/awesome-tailwindcss/c9545b3625c5738460143e951b04739440863cee/assets/logo.svg",
    link: "https://tailwindcss.com/"
  },
  {
    alt: "bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    link: "https://getbootstrap.com/"
  },
  {
    alt: "mui",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    link: "https://mui.com/material-ui/material-icons/"
  },
  {
    alt: "nodejs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org/en"
  },
  {
    alt: "npm",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    link: "https://www.npmjs.com/"
  },
  {
    alt: "nextjs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    link: "https://nextjs.org/"
  },
  {
    alt: "git",
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    link: "https://git-scm.com/"
  },
  {
    alt: "docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    link: "https://www.docker.com/"
  },
  {
    alt: "nginx",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    link: "https://www.nginx.com/"
  },
  {
    alt: "webpack",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    link: "https://webpack.js.org/"
  }
];

