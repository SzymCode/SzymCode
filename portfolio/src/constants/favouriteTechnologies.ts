import { TechInterface } from '@/types'
import { technologies } from '@/utils'

export default [
  ...technologies([
    'laravel',
    'vue',
    'primevue',
    'tailwind',
    'sass',
    'pest',
    'cypress',
    'vite'
  ])
] as TechInterface[]
