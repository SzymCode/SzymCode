export type CatalogCourse = {
  title: string
  level: string
  ready?: boolean
  icon: string
  description: string
  points: readonly string[]
  tags?: readonly string[]
}

export const paidCourses: readonly CatalogCourse[] = [
  {
    title: 'Laravel - nowoczesny backend',
    level: 'Poziom: podstawowy / średniozaawansowany',
    ready: false,
    icon: 'mdi:laravel',
    description:
      'Tworzenie backendu od podstaw: architektura, REST API, autoryzacja i dobre praktyki deploymentu.',
    points: [
      'Routing, kontrolery i serwisy',
      'Autoryzacja i walidacja danych',
      'Testy i przygotowanie pod produkcję',
    ],
    tags: ['Laravel', 'PHP', 'REST'],
  },
  {
    title: 'Nuxt - od zera do produkcji',
    level: 'Poziom: podstawowy / średniozaawansowany',
    ready: false,
    icon: 'mdi:nuxt',
    description:
      'Budowa nowoczesnej aplikacji SSR krok po kroku: routing, komponenty, API i deployment.',
    points: [
      'Struktura projektu i dobre praktyki',
      'Praca z danymi i warstwa API',
      'Wdrożenie i optymalizacja',
    ],
    tags: ['Nuxt', 'Vue', 'TypeScript'],
  },
  {
    title: 'Next.js - fullstack frontend',
    level: 'Poziom: średniozaawansowany',
    ready: false,
    icon: 'mdi:react',
    description:
      'Budowa aplikacji opartych o SSR/SSG, routing, fetchowanie danych i optymalizację wydajności.',
    points: [
      'App Router i struktura projektu',
      'Renderowanie i cache danych',
      'SEO i performance pod produkcję',
    ],
    tags: ['Next.js', 'React', 'TypeScript'],
  },
]

export const freeCourses: readonly CatalogCourse[] = [
  {
    title: 'Vue - komponenty i architektura',
    level: 'Poziom: podstawowy / średniozaawansowany',
    ready: false,
    icon: 'mdi:vuejs',
    description:
      'Nauka budowania skalowalnych aplikacji Vue: komponenty, composables, komunikacja i stan.',
    points: [
      'Composition API w praktyce',
      'Reusable komponenty i wzorce',
      'Optymalizacja i porządek w kodzie',
    ],
    tags: ['Vue', 'Pinia', 'Frontend'],
  },
  {
    title: 'React - nowoczesny frontend',
    level: 'Poziom: podstawowy / średniozaawansowany',
    ready: false,
    icon: 'mdi:react',
    description:
      'Tworzenie interfejsów w React: komponenty, hooki, zarządzanie stanem i praca z API.',
    points: [
      'Hooki i logika komponentów',
      'Formularze i obsługa danych',
      'Struktura projektu pod skalowanie',
    ],
    tags: ['React', 'Hooks', 'TypeScript'],
  },
  {
    title: 'SCSS - styling na poziomie pro',
    level: 'Poziom: podstawowy / średniozaawansowany',
    ready: false,
    icon: 'mdi:sass',
    description:
      'Pisanie utrzymywalnych styli: architektura SCSS, zmienne, mixiny i responsywność bez chaosu.',
    points: [
      'Modułowa struktura plików SCSS',
      'Mixiny, funkcje i tokeny design systemu',
      'Responsywność i porządek w stylach',
    ],
    tags: ['SCSS', 'CSS', 'UI'],
  },
]
