export const modules = [
  '@nuxt/icon',
  '@nuxtjs/critters',
  '@nuxtjs/google-fonts',
  '@nuxtjs/robots',
  '@nuxtjs/sitemap',
  'nuxt-schema-org',
  'nuxt-seo-utils',
  'nuxt-vitalizer',
  ...(process.env.APP_ENV === 'local'
    ? [
        '@nuxt/test-utils/module',
        '@nuxtjs/stylelint-module',
        'nuxt-link-checker',
      ]
    : []),
]
