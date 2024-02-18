import {TechProps} from "@/components/AboutMe";

export interface ArchiveCardProps {
    title: string
    description: string
    techItem: TechProps[]
    githubLink: string
    link: string
}

export interface HandleChangeThemeProps {
    darkMode: boolean
    toggleChangeTheme: () => void
}

export interface HandleScrollProps {
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
}

export interface SectionTitleProps {
    title: string
}
