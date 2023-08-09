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
        className="max-w-contentContainer mx-auto px-2 py-10 md:py-32"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-semibold">
            Some things I have built
          </h2>
          <p className="mt-2 text-sm text-primary">
            view the archive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lgl:px-10">
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
                link={cardData.link}/>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center">
          <button onClick={ () => { handleShowMoreClick(archiveCardsData) } } className="w-36 h-12 rounded-md text-primary text-[13px] border border-primary hover:bg-primary-lightblue dark:hover:bg-primary-darker duration-300">
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
      "This website helps storage contacts data and share it with others. This repository serves as my coding sandbox, where I can experiment with different solutions and refine my skills.",
    listItem: ["React", "Django", "TypeScript", "Tailwind"],
    link: "https://github.com/SzymCode/ContactBook"
  },
  {
    title: "ECommerceTemplate",
    description:
      "Store initialization template with all main functionalities. Includes essential features such as product listings, shopping cart and checkout processes connected with Stripe.",
    listItem: ["React", "Next.js", "Strapi", "Tailwind"],
    link: "https://github.com/SzymCode/ECommerceTemplate"
  },
  {
    title: "TodoApp",
    description:
      "This repository contains todo apps built with different technologies. Each folder represents a unique implementation, using different frameworks and programming languages.",
    listItem: ["Django", "React", "Redux", "Material UI"],
    link: "https://github.com/SzymCode/TodoApp"
  },
  {
    title: "RegistrationDjango",
    description: "User registration and login template connected with database.",
    listItem: ["Django", "HTML5", "CSS3", "Bootstrap"],
    link: "https://github.com/SzymCode/RegistrationDjango"
  },
  {
    title: "TinyProjects",
    description: "Tiny projects that were made for educational purposes.",
    listItem: ["JavaScript", "TypeScript", "Python", "C++"],
    link: "https://github.com/SzymCode/TinyProjects"
  },
  {
    title: "RecruitmentTasks",
    description: "This repository contains my solutions for the recruitment tasks.",
    listItem: ["React", "Material UI", "TypeScript"],
    link: "https://github.com/SzymCode/RecruitmentTasks"
  },
  {
    title: "ChessEngine",
    description: "Chess engine made with Pygame library + AI minimax algorithm.",
    listItem: ["Python", "Pygame"],
    link: "https://github.com/SzymCode/ChessEngine"
  },
  {
    title: "Snake",
    description: "Classic snake game built with Pygame library.",
    listItem: ["Python", "Pygame"],
    link: "https://github.com/SzymCode/Snake"
  },
  {
    title: "ClipboardManager",
    description: "Small and simple multi-line clipboard manager.",
    listItem: ["Python", "Tkinter", "Pyperclip"],
    link: "https://github.com/SzymCode/ClipboardManager"
  },
  {
    title: "YoutubeDownloader",
    description: "Simple youtube downloader made with tkinter. You can choose file extension .mp3, .mp4 or .3gpp.",
    listItem: ["Python", "Tkinter", "Pytube"],
    link: "https://github.com/SzymCode/YoutubeDownloader"
  },
  {
    title: "SzymCode/Portfolio",
    description: "This project is showcase of my programming skills to potential employers or clients.",
    listItem: ["React", "Tailwind", "Next.js"],
    link: "https://github.com/SzymCode/SzymCode/Portfolio"
  },
]