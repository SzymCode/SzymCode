import { useState } from "react"

import { ArchiveCard } from "@/components"

export default function Archive() {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="max-w-contentContainer mx-auto px-2 py-14">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-semibold">
          Some things I have built
        </h2>
        <p className="mt-2 text-sm text-primary">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 lgl:px-10">
        <ArchiveCard
            title="ContactBook"
            description="This website helps to storage contacts data and share it with others. This website serves as my coding sandbox, where I can experiment with different coding techniques and refine my skills."
            listItem={["React", "Django", "TypeScript", "Tailwind"]}
            link="https://github.com/SzymCode/ContactBook"/>
        <ArchiveCard
            title="ECommerceTemplate"
            description="Store initialization template with all main functionalities. Includes essential features such as product listings, shopping cart, checkout processes connected with Stripe."
            listItem={["React", "Next.js", "Strapi", "Tailwind"]}
            link="https://github.com/SzymCode/ECommerceTemplate"/>
        <ArchiveCard
            title="TodoApp"
            description="This repository contains todo apps built with different technologies. Each folder represents a unique implementation, using different frameworks and programming languages."
            listItem={["Django", "React", "Redux", "Material UI"]}
            link="https://github.com/SzymCode/TodoApp"/>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-primary text-[13px] border border-primary hover:bg-primary-lightblue duration-300">
          Show More
        </button>
      </div>
    </div>
  )
}
