
export default function HandleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault()

  const href = e.currentTarget.href
  const targetId = href.replace(/.*#/, "")
  const element = document.getElementById(targetId)
  const links = document.querySelectorAll(".nav-link")

  element?.scrollIntoView({ behavior: "smooth" })
  links.forEach((link) => {
    link.classList.remove("active")
  })

  e.currentTarget.classList.add("active")
}