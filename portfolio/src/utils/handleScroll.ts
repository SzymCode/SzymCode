import {
  ElementType,
  EventType,
  HandleScrollFunctionType,
  HrefType,
  LinksType,
  TargetIdType
} from '@/types'

export default function HandleScroll(
  event: EventType
): HandleScrollFunctionType {
  event.preventDefault()

  const href: HrefType = event.currentTarget.href
  const targetId: TargetIdType = href.replace(/.*#/, '')
  const element: ElementType = document.getElementById(targetId)
  const links: LinksType = document.querySelectorAll('.nav-link')

  element?.scrollIntoView({ behavior: 'smooth' })
  links?.forEach((link) => {
    link.classList.remove('active')
  })

  event.currentTarget.classList.add('active')
}
