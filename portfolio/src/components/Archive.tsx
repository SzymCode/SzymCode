import { motion } from "framer-motion"

import { ArchiveCard } from "@/components"
import { HandleShowMore } from "@/utils"
import { ArchiveCardProps } from "@/utils/handleProps"


export default function Archive() {
  const { visibleCardsCount, handleShowMoreClick } = HandleShowMore()

  return (
    <section id="projects">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="archive-container"
      >
        <div className="archive-div">
          <h2 className="archive-header-1">
            Some things I have built
          </h2>
          <p className="archive-header-2">
            view the archive
          </p>
        </div>
        <div className="archive-cards-container">
          {archiveCardsData.slice(0, visibleCardsCount).map((cardData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ArchiveCard
                title={cardData.title}
                description={cardData.description}
                techItem={cardData.techItem}
                githubLink={cardData.githubLink}
                link={cardData.link}
              />
            </motion.div>
          ))}
        </div>
        <div className="archive-button-container">
          <button className="my-button" onClick={ () => { handleShowMoreClick(archiveCardsData) } }>
            {visibleCardsCount < archiveCardsData.length ? "Show More" : "Show Less"}
          </button>
        </div>
      </motion.div>
    </section>
  )
}

const archiveCardsData: ArchiveCardProps[] = [
  {
    title: "ContactBook",
    description: "This website helps storage contacts data and share it with others.",
    techItem: [
      {
        alt: "laravel",
        src: "https://cdn.simpleicons.org/laravel/FF2D20",
        link: "https://laravel.com"
      },
      {
        alt: "vue",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        link: "https://vuejs.org"
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
      },
      {
        alt: "docker",
        src: "https://cdn.simpleicons.org/docker/2496ED",
        link: "https://www.docker.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/ContactBook",
    link: "https://contactbook-sc-5acf4c038efe.herokuapp.com"
  },
  {
    title: "ContactBook - sandbox",
    description: "This repository serves as my coding sandbox, where I can experiment with different solutions and refine my skills.",
    techItem: [
      {
        alt: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev"
      },
      {
        alt: "django",
        src: "https://cdn.simpleicons.org/django/092E20",
        link: "https://www.djangoproject.com"
      },
      {
        alt: "tailwind",
        src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        link: "https://tailwindcss.com"
      },
      {
        alt: "mui",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        link: "https://mui.com/material-ui"
      },
      {
        alt: "docker",
        src: "https://cdn.simpleicons.org/docker/2496ED",
        link: "https://www.docker.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/ContactBook-sandbox",
    link: "https://contactbook-szymcode.herokuapp.com"
  },
  {
    title: "AdminPanel",
    description: "Responsive admin panel, made for ONX Center company recruitment process.",
    techItem: [
      {
        alt: "laravel",
        src: "https://cdn.simpleicons.org/laravel/FF2D20",
        link: "https://laravel.com"
      },
      {
        alt: "vue",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        link: "https://vuejs.org"
      },
      {
        alt: "bootstrap",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        link: "https://getbootstrap.com"
      },
      {
        alt: "docker",
        src: "https://cdn.simpleicons.org/docker/2496ED",
        link: "https://www.docker.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/RecruitmentTasks/tree/admin-panel",
    link: "https://admin-panel-sc-60b477b71887.herokuapp.com"
  },
  {
    title: "GiardDesign",
    description: "Fully responsive website with photo gallery, made for adRespect company recruitment process. Graphic design is their own.",
    techItem: [
      {
        alt: "javascript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://www.javascript.com"
      },
      {
        alt: "html5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://html.com"
      },
      {
        alt: "css3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        link: "https://css3.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/RecruitmentTasks/tree/giard-design",
    link: "https://szymcode.github.io/RecruitmentTasks"
  },
  {
    title: "RecruitmentTasks",
    description: "This repository contains my solutions for the recruitment tasks.",
    techItem: [
      {
        alt: "laravel",
        src: "https://cdn.simpleicons.org/laravel/FF2D20",
        link: "https://laravel.com"
      },
      {
        alt: "vue",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        link: "https://vuejs.org"
      },
      {
        alt: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev"
      },
      {
        alt: "django",
        src: "https://cdn.simpleicons.org/django/092E20",
        link: "https://www.djangoproject.com"
      },
      {
        alt: "bootstrap",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        link: "https://getbootstrap.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/RecruitmentTasks",
    link: "https://github.com/SzymCode/RecruitmentTasks"
  },
  {
    title: "GoogleBrowser",
    description: "Google browser clone built using Google Search API.",
    techItem: [
      {
        alt: "typescript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org"
      },
      {
        alt: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev"
      },
      {
        alt: "tailwind",
        src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        link: "https://tailwindcss.com"
      },
      {
        alt: "html5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://html.com"
      },
    ],
    githubLink: "https://github.com/SzymCode/GoogleBrowser",
    link: "https://google-browser-sc.vercel.app"
  },
  {
    title: "ECommerceTemplate",
    description: "Store initialization template with all main functionalities. Includes essential features such as product listings, shopping cart and checkout processes connected with Stripe.",
    techItem: [
      {
        alt: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev"
      },
      {
        alt: "redux",
        src: "https://cdn.simpleicons.org/redux/764ABC",
        link: "https://redux.js.org"
      },
      {
        alt: "tailwind",
        src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        link: "https://tailwindcss.com"
      },
      {
        alt: "next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        link: "https://nextjs.org"
      },
      {
        alt: "strapi",
        src: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Strapi.jpg",
        link: "https://strapi.io"
      }
    ],
    githubLink: "https://github.com/SzymCode/ECommerceTemplate",
    link: "https://e-commerce-template-szymcode.vercel.app"
  },
  {
    title: "DiscordClone",
    description: "Discord clone built by following a step-by-step YouTube tutorial by Ali Codes.",
    techItem: [
      {
        alt: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev"
      },
      {
        alt: "redux",
        src: "https://cdn.simpleicons.org/redux/764ABC",
        link: "https://redux.js.org"
      },
      {
        alt: "firebase",
        src: "https://cdn.simpleicons.org/firebase/FFCA28",
        link: "https://firebase.google.com"
      },
      {
        alt: "tailwind",
        src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        link: "https://tailwindcss.com"
      },
    ],
    githubLink: "https://github.com/SzymCode/SzymCode/DiscordClone",
    link: "https://discord-clone-szymcode.vercel.app"
  },
  {
    title: "TodoApp",
    description: "This repository contains todo apps built with different technologies. Each folder represents a unique implementation, using different frameworks and programming languages.",
    techItem: [
      {
        alt: "django",
        src: "https://cdn.simpleicons.org/django/092E20",
        link: "https://www.djangoproject.com"
      },
      {
        alt: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev"
      },
      {
        alt: "redux",
        src: "https://cdn.simpleicons.org/redux/764ABC",
        link: "https://redux.js.org"
      },
      {
        alt: "mui",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        link: "https://mui.com/material-ui"
      }
    ],
    githubLink: "https://github.com/SzymCode/TodoApp",
    link: "https://github.com/SzymCode/TodoApp"
  },
  {
    title: "RWD - exercises",
    description: "Repository with Responsive Web Design exercises.",
    techItem: [
      {
        alt: "javascript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://www.javascript.com"
      },
      {
        alt: "html5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://html.com"
      },
      {
        alt: "css3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        link: "https://css3.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/RWD-exercises",
    link: "https://rwd-exercises-navbar.vercel.app"
  },
  {
    title: "RegistrationDjango",
    description: "User registration and login template connected with database.",
    techItem: [
      {
        alt: "django",
        src: "https://cdn.simpleicons.org/django/092E20",
        link: "https://www.djangoproject.com"
      },
      {
        alt: "html5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://html.com"
      },
      {
        alt: "css3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        link: "https://css3.com"
      },
      {
        alt: "docker",
        src: "https://cdn.simpleicons.org/docker/2496ED",
        link: "https://www.docker.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/RegistrationDjango",
    link: "https://registration-django-sc-4b31f06e64f2.herokuapp.com/login/?next=/"
  },
  {
    title: "TinyProjects",
    description: "Tiny projects that were made for educational purposes.",
    techItem: [
      {
        alt: "javascript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://www.javascript.com"
      },
      {
        alt: "typescript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org"
      },
      {
        alt: "python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://www.python.org"
      },
      {
        alt: "c++",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        link: "https://cplusplus.com"
      },
      {
        alt: "css3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        link: "https://css3.com"
      }
    ],
    githubLink: "https://github.com/SzymCode/TinyProjects",
    link: "https://github.com/SzymCode/TinyProjects"
  },
  {
    title: "SzymCode/Portfolio",
    description: "This project is showcase of my programming skills to potential employers or clients.",
    techItem: [
      {
        alt: "typescript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org"
      },
      {
        alt: "react",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev"
      },
      {
        alt: "tailwind",
        src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        link: "https://tailwindcss.com"
      },
      {
        alt: "html5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://html.com"
      },
      {
        alt: "next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        link: "https://nextjs.org"
      }
    ],
    githubLink: "https://github.com/SzymCode/SzymCode/Portfolio",
    link: "https://szymcode.vercel.app"
  },
  {
    title: "SentrySubstitute",
    description: "Package intended to replace Sentry in daily work.",
    techItem: [
      {
        alt: "php",
        src: "https://skillicons.dev/icons?i=php",
        link: "https://www.php.net"
      },
      {
        alt: "laravel",
        src: "https://cdn.simpleicons.org/laravel/FF2D20",
        link: "https://laravel.com"
      },
    ],
    githubLink: "https://github.com/SzymCode/SentrySubstitute",
    link: "https://github.com/SzymCode/SentrySubstitute"
  },
  {
    title: "ChessEngine",
    description: "Chess engine made with Pygame library + AI minimax algorithm.",
    techItem: [
      {
        alt: "python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://www.python.org"
      },
      {
        alt: "pygame",
        src: "https://user-images.githubusercontent.com/46412508/170405943-e75458ec-6cb4-462e-91ba-43c861a3d6cf.png",
        link: "https://www.pygame.org/docs"
      },
    ],
    githubLink: "https://github.com/SzymCode/ChessEngine",
    link: "https://github.com/SzymCode/ChessEngine"
  },
  {
    title: "Snake",
    description: "Classic snake game built with Pygame library.",
    techItem: [
      {
        alt: "python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://www.python.org"
      },
      {
        alt: "pygame",
        src: "https://user-images.githubusercontent.com/46412508/170405943-e75458ec-6cb4-462e-91ba-43c861a3d6cf.png",
        link: "https://www.pygame.org/docs"
      },
    ],
    githubLink: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/snake.py",
    link: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/snake.py"
  },
  {
    title: "ClipboardManager",
    description: "Small and simple multi-line clipboard manager.",
    techItem: [
      {
        alt: "python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://www.python.org"
      },
    ],
    githubLink: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/clipboard_manager.py",
    link: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/clipboard_manager.py"
  },
  {
    title: "YoutubeDownloader",
    description: "Simple youtube downloader made with tkinter. You can choose file extension .mp3, .mp4 or .3gpp.",
    techItem: [
      {
        alt: "python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://www.python.org"
      },
      {
        alt: "pytube",
        src: "https://avatars.githubusercontent.com/u/16789089?v=4&s=400",
        link: "https://pytube.io/en/latest/"
      },
    ],
    githubLink: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/youtube_downloader.py",
    link: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/youtube_downloader.py"
  },
]
