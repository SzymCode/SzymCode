import { TechInterface } from '@/types'

export default function technologies(keys: string[]): TechInterface[] {
  const technologies: { [key: string]: TechInterface } = {
    bootstrap: {
      alt: 'Bootstrap',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      link: 'https://getbootstrap.com'
    },
    'chakra ui': {
      alt: 'Chakra UI',
      src: 'https://www.crocoder.dev/assets/chakra-ui.46d212e4.png',
      link: 'https://chakra-ui.com'
    },
    cpp: {
      alt: 'C++',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      link: 'https://cplusplus.com'
    },
    css3: {
      alt: 'CSS3',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      link: 'https://css3.com'
    },
    cypress: {
      alt: 'Cypress',
      src: 'https://static-00.iconduck.com/assets.00/cypress-icon-512x511-29zvfts6.png',
      link: 'https://www.cypress.io'
    },
    django: {
      alt: 'Django',
      src: 'https://cdn.simpleicons.org/django/092E20',
      link: 'https://www.djangoproject.com'
    },
    docker: {
      alt: 'Docker',
      src: 'https://cdn.simpleicons.org/docker/2496ED',
      link: 'https://www.docker.com'
    },
    firebase: {
      alt: 'Firebase',
      src: 'https://cdn.simpleicons.org/firebase/FFCA28',
      link: 'https://firebase.google.com'
    },
    html5: {
      alt: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      link: 'https://html.com'
    },
    javascript: {
      alt: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      link: 'https://www.javascript.com'
    },
    laravel: {
      alt: 'Laravel',
      src: 'https://cdn.simpleicons.org/laravel/FF2D20',
      link: 'https://laravel.com'
    },
    mui: {
      alt: 'Material UI',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      link: 'https://mui.com/material-ui'
    },
    'next.js': {
      alt: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      link: 'https://nextjs.org'
    },
    pest: {
      alt: 'Pest',
      src: 'https://plugins.jetbrains.com/files/14636/423525/icon/pluginIcon.png',
      link: 'https://pestphp.com'
    },
    php: {
      alt: 'PHP',
      src: 'https://skillicons.dev/icons?i=php',
      link: 'https://www.php.net'
    },
    primevue: {
      alt: 'PrimeVue',
      src: 'https://www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png',
      link: 'https://primevue.org'
    },
    pytube: {
      alt: 'PyTube',
      src: 'https://avatars.githubusercontent.com/u/16789089?v=4&s=400',
      link: 'https://pytube.io/en/latest/'
    },
    python: {
      alt: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      link: 'https://www.python.org'
    },
    pygame: {
      alt: 'PyGame',
      src: 'https://user-images.githubusercontent.com/46412508/170405943-e75458ec-6cb4-462e-91ba-43c861a3d6cf.png',
      link: 'https://www.pygame.org/docs'
    },
    react: {
      alt: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      link: 'https://react.dev'
    },
    redux: {
      alt: 'Redux',
      src: 'https://cdn.simpleicons.org/redux/764ABC',
      link: 'https://redux.js.org'
    },
    sass: {
      alt: 'Sass',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      link: 'https://sass-lang.com'
    },
    strapi: {
      alt: 'Strapi',
      src: 'https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Strapi.jpg',
      link: 'https://strapi.io'
    },
    tailwind: {
      alt: 'Tailwind',
      src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      link: 'https://tailwindcss.com'
    },
    typescript: {
      alt: 'TypeScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      link: 'https://www.typescriptlang.org'
    },
    vite: {
      alt: 'Vite',
      src: 'https://vitejs.dev/logo-with-shadow.png',
      link: 'https://vitejs.dev'
    },
    vue: {
      alt: 'Vue',
      src: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
      link: 'https://vuejs.org'
    }
  }

  return keys.map((key) => technologies[key])
}
