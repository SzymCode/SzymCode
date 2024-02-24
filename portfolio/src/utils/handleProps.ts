export interface ArchiveCardProps {
    title: string
    description: string
    techItem: TechProps[]
    githubLink: string
    link: string
}

export interface ChangeThemeProps {
    darkMode: boolean
    toggleChangeTheme: () => void
}

export interface NavbarProps {
    darkMode: boolean
    toggleChangeTheme: () => void
}

export interface SectionTitleProps {
    title: string
}

export interface TechProps {
    alt: string
    src: string
    link?: string
}
