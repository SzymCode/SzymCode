import { defineNuxtConfig } from 'nuxt/config'

import { appConfig } from './nuxt/app'
import { devConfig } from './nuxt/dev'
import { experimentalConfig } from './nuxt/experimental'
import { featuresConfig } from './nuxt/features'
import { googleFontsConfig, iconConfig } from './nuxt/fonts-icon'
import { modules } from './nuxt/modules'
import { nitroConfig } from './nuxt/nitro'
import { performanceConfig } from './nuxt/performance'
import { runtimeConfig } from './nuxt/runtime'
import { schemaOrgConfig } from './nuxt/schema-org'
import { structureConfig } from './nuxt/structure'
import { viteConfig } from './nuxt/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ...devConfig,
  modules,
  runtimeConfig,
  app: appConfig,
  schemaOrg: schemaOrgConfig,
  vite: viteConfig,
  experimental: experimentalConfig,
  googleFonts: googleFontsConfig,
  features: featuresConfig,
  icon: iconConfig,
  ...performanceConfig,
  ...structureConfig,
  ...nitroConfig,
  // biome-ignore lint/suspicious/noExplicitAny: Nuxt config complexity @typescript-eslint/no-explicit-any
} as any)
