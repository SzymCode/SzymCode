import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

export default defineVitestConfig({
  root,
  test: {
    environment: 'nuxt',
    include: ['vitests/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    testTimeout: 30000,
    onConsoleLog: () => false,
    teardownTimeout: 5000,
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
      },
    },
  },
})
