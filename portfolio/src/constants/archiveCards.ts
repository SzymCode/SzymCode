import { ArchiveCardInterface } from '@/types'
import { technologies } from '@/utils'

// Why i use // inside technologies array?
// Answer: https://stackoverflow.com/questions/59621529/prettier-formats-in-multiline-for-arrays-and-long-line-in-vscode

export default [
  {
    title: 'DataManager',
    description:
      'This website helps storage various data types and share it with others.',
    techItems: technologies([
      'laravel', //
      'vue',
      'primevue',
      'sass',
      'pest',
      'docker'
    ]),
    githubLink: 'https://github.com/SzymCode/DataManager',
    link: 'http://datamanager.szymco.de'
  },
  {
    title: 'AdminPanel',
    description:
      'Responsive admin panel, made for ONX Center company recruitment process.',
    techItems: technologies([
      'laravel', //
      'vue',
      'css3',
      'bootstrap',
      'docker'
    ]),
    githubLink: 'https://github.com/SzymCode/RecruitmentTasks/tree/admin-panel',
    link: 'http://adminpanel.szymco.de'
  },
  {
    title: 'LinkhouseBlog',
    description: 'This is a recruitment task project for Linkhouse company.',
    techItems: technologies([
      'laravel', //
      'vue',
      'primevue',
      'sass',
      'pest',
      'docker'
    ]),
    githubLink:
      'https://github.com/SzymCode/RecruitmentTasks/tree/linkhouse-blog',
    link: 'http://linkhouse-blog.szymco.de'
  },
  {
    title: 'TagManager',
    description:
      'This website helps storage various data types and share it with others.',
    techItems: technologies([
      'typescript', //
      'react',
      'redux',
      'chakra ui'
    ]),
    githubLink: 'https://github.com/SzymCode/RecruitmentTasks/tree/tag-manager',
    link: 'http://tagmanager.szymco.de'
  },
  {
    title: 'ArticleSystem',
    description:
      'Simple article system project for Online Venture company recruitment process.',
    techItems: technologies([
      'laravel', //
      'html5',
      'sass',
      'pest',
      'docker'
    ]),
    githubLink:
      'https://github.com/SzymCode/RecruitmentTasks/tree/article-system',
    link: 'http://article-system.szymco.de'
  },
  {
    title: 'GiardDesign',
    description:
      'Fully responsive website with photo gallery, made for adRespect company recruitment process. Graphic design is their own.',
    techItems: technologies([
      'javascript', //
      'html5',
      'bootstrap',
      'tailwind'
    ]),
    githubLink:
      'https://github.com/SzymCode/RecruitmentTasks/tree/giard-design',
    link: 'http://giard-design.szymco.de'
  },
  {
    title: 'LAMountains',
    description:
      'This is a recruitment task project for Coalition Technologies company. Graphic design is their own.',
    techItems: technologies([
      'javascript', //
      'html5',
      'css3'
    ]),
    githubLink:
      'https://github.com/SzymCode/RecruitmentTasks/tree/la-mountains',
    link: 'http://la-mountains.szymco.de'
  },
  {
    title: 'RecruitmentTasks',
    description:
      'This repository contains my solutions for the recruitment tasks.',
    techItems: technologies([
      'laravel', //
      'vue',
      'react',
      'redux',
      'django',
      'bootstrap'
    ]),
    githubLink: 'https://github.com/SzymCode/RecruitmentTasks',
    link: 'https://github.com/SzymCode/RecruitmentTasks'
  },
  {
    title: 'GoogleBrowser',
    description: 'Google browser clone built using Google Search API.',
    techItems: technologies([
      'typescript', //
      'react',
      'tailwind'
    ]),
    githubLink: 'https://github.com/SzymCode/GoogleBrowser',
    link: 'https://google-browser.szymco.de'
  },
  {
    title: 'ECommerceTemplate',
    description:
      'Store initialization template with all main functionalities such as product listings, shopping cart and checkout processes connected with Stripe.',
    techItems: technologies([
      'react', //
      'redux',
      'tailwind',
      'next.js',
      'strapi'
    ]),
    githubLink: 'https://github.com/SzymCode/ECommerceTemplate',
    link: 'https://e-commerce.szymco.de'
  },
  {
    title: 'DiscordClone',
    description:
      'Discord clone built by following a step-by-step YouTube tutorial by Ali Codes.',
    techItems: technologies([
      'react', //
      'redux',
      'tailwind',
      'firebase'
    ]),
    githubLink: 'https://github.com/SzymCode/SzymCode/DiscordClone',
    link: 'https://discord-clone.szymco.de'
  },
  {
    title: 'TodoApp',
    description:
      'This repository contains todo apps built with different technologies. Each folder is separate application.',
    techItems: technologies([
      'django', //
      'react',
      'redux',
      'mui'
    ]),
    githubLink: 'https://github.com/SzymCode/TodoApp',
    link: 'https://github.com/SzymCode/TodoApp'
  },
  {
    title: 'RWD - exercises',
    description: 'Repository with Responsive Web Design exercises.',
    techItems: technologies([
      'javascript', //
      'html5',
      'css3'
    ]),
    githubLink: 'https://github.com/SzymCode/RWD-exercises',
    link: 'https://rwd-footer.szymco.de'
  },
  {
    title: 'SzymCode/Portfolio',
    description:
      'This project is showcase of my programming skills to potential employers or clients.',
    techItems: technologies([
      'typescript', //
      'react',
      'tailwind',
      'html5',
      'next.js'
    ]),
    githubLink: 'https://github.com/SzymCode/SzymCode/Portfolio',
    link: 'https://szymco.de'
  },
  {
    title: 'SentrySubstitute',
    description: 'Package intended to replace Sentry in daily work.',
    techItems: technologies([
      'php', //
      'laravel'
    ]),
    githubLink: 'https://github.com/SzymCode/SentrySubstitute',
    link: 'https://github.com/SzymCode/SentrySubstitute'
  },
  {
    title: 'RegistrationDjango',
    description:
      'User registration and login template connected with database.',
    techItems: technologies([
      'django', //
      'html5',
      'css3',
      'docker'
    ]),
    githubLink: 'https://github.com/SzymCode/RegistrationDjango',
    link: 'http://registration-django.szymco.de'
  },
  {
    title: 'TinyProjects',
    description: 'Tiny projects that were made for educational purposes.',
    techItems: technologies([
      'javascript', //
      'typescript',
      'python',
      'cpp',
      'css3'
    ]),
    githubLink: 'https://github.com/SzymCode/TinyProjects',
    link: 'https://github.com/SzymCode/TinyProjects'
  },
  {
    title: 'ChessEngine',
    description:
      'Chess engine made with Pygame library + AI minimax algorithm.',
    techItems: technologies([
      'python', //
      'pygame'
    ]),
    githubLink: 'https://github.com/SzymCode/ChessEngine',
    link: 'https://github.com/SzymCode/ChessEngine'
  },
  {
    title: 'Snake',
    description: 'Classic snake game built with Pygame library.',
    techItems: technologies([
      'python', //
      'pygame'
    ]),
    githubLink:
      'https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/snake.py',
    link: 'https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/snake.py'
  },
  {
    title: 'ClipboardManager',
    description: 'Small and simple multi-line clipboard manager.',
    techItems: technologies([
      'python' //
    ]),
    githubLink:
      'https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/clipboard_manager.py',
    link: 'https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/clipboard_manager.py'
  },
  {
    title: 'YoutubeDownloader',
    description:
      'Simple youtube downloader made with tkinter. You can choose file extension .mp3, .mp4 or .3gpp.',
    techItems: technologies([
      'python', //
      'pytube'
    ]),
    githubLink:
      'https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/youtube_downloader.py',
    link: 'https://github.com/SzymCode/TinyProjects/blob/main/Others/Python/youtube_downloader.py'
  }
] as ArchiveCardInterface[]
