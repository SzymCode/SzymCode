import { useState } from "react"
import { motion } from "framer-motion"

import { ArchiveCard } from "@/components"
import { HandleShowMore } from "@/utils"
import { ArchiveCardProps } from "@/components/ArchiveCard"


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
        <div className="archive-header">
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
                listItem={cardData.listItem}
                githubLink={cardData.githubLink}
                link={cardData.link}/>
            </motion.div>
          ))}
        </div>
        <div className="archive-button-container">
          <button className="archive-button" onClick={ () => { handleShowMoreClick(archiveCardsData) } }>
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
    description:
        "This website helps storage contacts data and share it with others.",
    listItem: ["PHP", "TypeScript", "Laravel", "Vue.js", "Tailwind"],
    githubLink: "https://github.com/SzymCode/ContactBook",
    link: "https://github.com/SzymCode/ContactBook"
  },
  {
    title: "ContactBook - sandbox",
    description:
      "This website helps storage contacts data and share it with others. This repository serves as my coding sandbox, where I can experiment with different solutions and refine my skills.",
    listItem: ["React", "Django", "TypeScript", "Tailwind"],
    githubLink: "https://github.com/SzymCode/ContactBook-sandbox",
    link: "https://contactbook-szymcode.herokuapp.com/lists"
  },
  {
    title: "SentrySubstitute",
    description:
        "Package intended to replace Sentry in daily work.",
    listItem: ["PHP", "Laravel"],
    githubLink: "https://github.com/SzymCode/SentrySubstitute",
    link: "https://github.com/SzymCode/SentrySubstitute"
  },
  {
    title: "AdminPanel",
    description:
      "Responsive admin panel, made for ONX Center company recruitment process.",
    listItem: ["PHP", "Laravel", "Vue", "Tailwind", "Bootstrap"],
    githubLink: "https://github.com/SzymCode/RecruitmentTasks/tree/admin-panel",
    link: "https://github.com/SzymCode/RecruitmentTasks/tree/admin-panel"
  },
  {
    title: "GiardDesign",
    description:
      "Fully responsive website with photo gallery, made for adRespect company recruitment process. Graphic design is their own.",
    listItem: ["HTML", "JavaScript", "Tailwind", "Bootstrap"],
    githubLink: "https://github.com/SzymCode/RecruitmentTasks/tree/giard-design",
    link: "https://szymcode.github.io/RecruitmentTasks/"
  },
  {
    title: "RecruitmentTasks",
    description: "This repository contains my solutions for the recruitment tasks.",
    listItem: ["React", "Material UI", "TypeScript"],
    githubLink: "https://github.com/SzymCode/RecruitmentTasks",
    link: "https://github.com/SzymCode/RecruitmentTasks"
  },
  {
    title: "ECommerceTemplate",
    description:
      "Store initialization template with all main functionalities. Includes essential features such as product listings, shopping cart and checkout processes connected with Stripe.",
    listItem: ["React", "Next.js", "Strapi", "Tailwind"],
    githubLink: "https://github.com/SzymCode/ECommerceTemplate",
    link: "https://e-commerce-template-szymcode.vercel.app/"
  },
  {
    title: "DiscordClone",
    description: "Discord clone built by following a step-by-step YouTube tutorial by Ali Codes.",
    listItem: ["React", "Tailwind", "Firebase", "Redux"],
    githubLink: "https://github.com/SzymCode/SzymCode/DiscordClone",
    link: "https://discord-clone-szymcode.vercel.app"
  },
  {
    title: "TodoApp",
    description:
      "This repository contains todo apps built with different technologies. Each folder represents a unique implementation, using different frameworks and programming languages.",
    listItem: ["Django", "React", "Redux", "Material UI"],
    githubLink: "https://github.com/SzymCode/TodoApp",
    link: "https://github.com/SzymCode/TodoApp"
  },
  {
    title: "RWD - exercises",
    description:
      "Repository with Responsive Web Design exercises.",
    listItem: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/SzymCode/RWD-exercises",
    link: "https://rwd-exercises-navbar.vercel.app/"
  },
  {
    title: "RegistrationDjango",
    description: "User registration and login template connected with database.",
    listItem: ["Django", "HTML5", "CSS3", "Bootstrap"],
    githubLink: "https://github.com/SzymCode/RegistrationDjango",
    link: "https://github.com/SzymCode/RegistrationDjango"
  },
  {
    title: "TinyProjects",
    description: "Tiny projects that were made for educational purposes.",
    listItem: ["JavaScript", "TypeScript", "Python", "C++"],
    githubLink: "https://github.com/SzymCode/TinyProjects",
    link: "https://github.com/SzymCode/TinyProjects"
  },
  {
    title: "SzymCode/Portfolio",
    description: "This project is showcase of my programming skills to potential employers or clients.",
    listItem: ["React", "Tailwind", "Next.js"],
    githubLink: "https://github.com/SzymCode/SzymCode/Portfolio",
    link: "https://szymcode.vercel.app/"
  },
  {
    title: "ChessEngine",
    description: "Chess engine made with Pygame library + AI minimax algorithm.",
    listItem: ["Python", "Pygame"],
    githubLink: "https://github.com/SzymCode/ChessEngine",
    link: "https://github.com/SzymCode/ChessEngine"
  },
  {
    title: "Snake",
    description: "Classic snake game built with Pygame library.",
    listItem: ["Python", "Pygame"],
    githubLink: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/snake.py",
    link: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/snake.py"
  },
  {
    title: "ClipboardManager",
    description: "Small and simple multi-line clipboard manager.",
    listItem: ["Python", "Tkinter", "Pyperclip"],
    githubLink: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/clipboard_manager.py",
    link: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/clipboard_manager.py"
  },
  {
    title: "YoutubeDownloader",
    description: "Simple youtube downloader made with tkinter. You can choose file extension .mp3, .mp4 or .3gpp.",
    listItem: ["Python", "Tkinter", "Pytube"],
    githubLink: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/youtube_downloader.py",
    link: "https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/youtube_downloader.py"
  },
]
