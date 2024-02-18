export default function HandleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()

  const href = event.currentTarget.href
  const targetId = href.replace(/.*#/, "")
  const element = document.getElementById(targetId)
  const links = document.querySelectorAll(".nav-link")

  element?.scrollIntoView({ behavior: "smooth" })
  links.forEach((link) => {
    link.classList.remove("active")
  })

  event.currentTarget.classList.add("active")
}
