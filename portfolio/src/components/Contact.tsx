import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.section
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 2.9 }}
        id="contact" className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center">
      <p className="text-4xl text-primary font-bold flex items-center tracking-wide">
        Contact Me
      </p>
      <p className="max-w-[700px] text-center text-primary-black dark:text-primary-lightgray">
        Are you looking for a passionate <span className="text-primary"> Fullstack Developer </span>
        to join your team? I would love to be part of your organization and contribute my skills and
        expertise to help achieve your goals. Please use the contact form below to get in touch.
      </p>
      <a href="mailto:s.radomski19@gmail.com">
        <button className="w-36 h-14 border border-primary mt-6 text-sm text-primary tracking-wider rounded-md hover:bg-primary-lightblue dark:hover:bg-primary-darker duration-300">
          Gmail
        </button>
      </a>
    </motion.section>
  )
}
