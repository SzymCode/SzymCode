import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"


import { SectionTitle } from "@/components"

export default function Projects() {
  return (
   <section id="project" className="max-w-containerSmall mx-auto py-24 text-primary">
     <SectionTitle title="Some things I have built" />
     <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
       <div className="flex flex-col xl:flex-row gap-6">
         <a href="https://contactbook-szymcode.herokuapp.com/lists" target="_blank" className="w-3/4 h-auto relative group">
           <img alt="" src="/contactbook.png" className="w-full h-full object-contain" />
         </a>
         <div className="w-full xl:w-1/2 h-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
           <h3 className="text-3xl font-bold">
             ContactBook
           </h3>
           <p className="bg-primary-black text-sm md:text-base p-2 md:p-6 rounded-md w-[600px]">
             This website helps to storage contacts data and share it with others.
           </p>
           <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-primary-black">
             <li>React</li>
             <li>Django</li>
             <li>TypeScript</li>
             <li>TailwindCSS</li>
             <li>Material UI</li>
           </ul>
           <div className="text-2xl flex gap-4">
             <a href="https://github.com/SzymCode/ContactBook" target="_blank" className="text-primary-gray hover:text-black duration-300">
               <TbBrandGithub/>
             </a>
             <a href="https://contactbook-szymcode.herokuapp.com/lists" target="_blank" className="text-primary-gray hover:text-black duration-300">
               <RxOpenInNewWindow/>
             </a>
           </div>
         </div>
       </div>
       <div className="flex flex-col xl:flex-row-reverse gap-6">
         <a href="https://github.com/SzymCode/ECommerceTemplate" target="_blank"
             className="w-3/4 h-auto relative group">
           <div>
             <img alt="" src="/ecommerce.png"
                 className="w-full h-full object-contain" />
           </div>
         </a>
         <div className="w-full xl:w-1/2 h-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
           <h3 className="text-3xl font-bold">
             ECommerceTemplate
           </h3>
           <p className="bg-primary-black text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md w-[530px]">
             Empower your online business with customizable template designed to help you create stunning e-commerce website.
           </p>
           <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-primary-black">
             <li>Nextjs</li>
             <li>React</li>
             <li>TailwindCSS</li>
             <li>Redux</li>
             <li>Strapi</li>
             <li>Stripe</li>
           </ul>
           <div className="text-2xl flex gap-4">
             <a href="https://github.com/SzymCode/ECommerceTemplate" target="_blank" className="text-primary-gray hover:text-black duration-300">
               <TbBrandGithub/>
             </a>
             <a href="https://e-commerce-template-szymcode.vercel.app" target="_blank" className="text-primary-gray hover:text-black duration-300">
               <RxOpenInNewWindow/>
             </a>
           </div>
         </div>
       </div>
     </div>

   </section>
  )
}
