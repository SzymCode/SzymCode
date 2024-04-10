export interface ArchiveCardInterface {
  title: string
  description: string
  techItems: TechInterface[]
  githubLink: string
  link: string
}

export interface ChangeThemeInterface {
  darkMode: boolean
  toggleChangeTheme: () => void
}

export interface HandleShowMoreInterface {
  visibleCardsCount: number
  handleShowMoreClick: (archiveCardsData: ArchiveCardInterface[]) => void
}

export interface NavbarInterface {
  darkMode: boolean
  toggleChangeTheme: () => void
}

export interface SectionTitleInterface {
  title: string
}

export interface TechInterface {
  alt: string
  src: string
  link?: string
}
